<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Helpers\RestApi;
use App\Models\Property;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ChildImgProperty;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


class PropertyController extends Controller
{
    public function index()
    {
        if (request()->wantsJson()) {
            
            $data = Property::where('pemilik_id', Auth::guard('api')->user()->id)->with('ChildImg')->get();    
            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }
    public function PropertyPending()
    {
        if (request()->wantsJson()) {
            
            $data = Payment::where('user_id', Auth::guard('api')->user()->id)->with('property.ChildImg')->get();    
            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }
    public function GetProperty()
    {
        if (request()->wantsJson()) {
            
            $data = Property::with('ChildImg')->get();    
            
            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function detail($uuid)
    {
        if (request()->wantsJson()) {
            
            $data = Property::where('uuid', $uuid)->with('ChildImg')->first();  
            if(!isset($data)){
                return response()->json(['message' => 'No Data Found!'], 401);
            }
            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function store(Request $request)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'images.*' => ['required','mimes:png,jpg'],
                'panjang' => ['required'],
                'lebar' => ['required'],
                'lokasi' => ['required'],
                'description' => ['required'],
                'khusus' => ['required'],
                'harga' => ['required'],
            ]);
            
            if ($validate->fails()) {
                $message = [];
                $errors = $validate ->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }   
                return RestApi::error($message, 400);
            }

            $req = $request->all();
            $pemilik_id = Auth::guard('api')->user()->id;
            
            $data = Property::create([
                'lebar' => $req['lebar'],
                'panjang' => $req['panjang'],
                'lokasi' => $req['lokasi'],
                'description' => $req['description'],
                'harga' => $req['harga'],
                'khusus' => $req['khusus'],
                'pemilik_id' => $pemilik_id
            ]);

            $ImagesCol = [];
            if($request->has('images') && count($request['images']) != 0){                
                $uploadedImages = [];
                foreach ($request->file('images') as $image) {

                    $image_name = $image->getClientOriginalName();
                    
                    if ($image_name != 'blob') {

                        $image_name = date('Y-M-D-h-s') . '-' . $image_name;
                        $image->storeAs('/public/ChildImgProperty', $image_name);

                        $ChildImage = ChildImgProperty::create([
                            'property_id' => $data->id,
                            'image' => $image_name
                        ]);
                    
                    } else {
                        return RestApi::error(['Data Failed To Created'], 400);
                    }
                    
                }
                
            }
            if ($data) {
                return RestApi::success(['Data Successfully Created'], 201);
            } else {
                return RestApi::error(['Data Failed To Created'], 400);
            }

        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }
    
    public function show($uuid){
        if (request()->wantsJson()) {

            $data = Property::where('uuid', $uuid)->with('ChildImg')->first();

            if(!isset($data)){
                return RestApi::error(['Data Not Found'], 400);
            }

            return response()->json($data, 200);
            
        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function DeleteImage($uuid){
        if (request()->wantsJson()) {

            $data = ChildImgProperty::where('uuid', $uuid)->first();
            
            if(!isset($data)){
                return RestApi::error(['Data Not Found!'], 400);
            }

            if($data->delete()){
                return response()->json(['success' => true,'message' => 'Data Successfuly Deleted!'], 200);
            }
            
            return response()->json(['message' => 'bad request!'], 401);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function update(Request $request, $uuid)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'images.*' => ['nullable','mimes:png,jpg'],
                'panjang' => ['required'],
                'lebar' => ['required'],
                'lokasi' => ['required'],
                'description' => ['required'],
                'khusus' => ['required'],
                'harga' => ['required'],
            ]);
            
            if ($validate->fails()) {
                $message = [];
                $errors = $validate ->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }   
                return RestApi::error($message, 400);
            }

            $req = $request->all();
            $data = Property::where('uuid', $uuid)->first();
            
            if (!isset($data)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            
            $data->update([
                'lebar' => $req['lebar'],
                'panjang' => $req['panjang'],
                'lokasi' => $req['lokasi'],
                'description' => $req['description'],
                'harga' => $req['harga'],
                'khusus' => $req['khusus'],
            ]);                                     

            $ImagesCol = [];
            if($request->has('images') && count($request['images']) != 0){                
                $uploadedImages = [];
                foreach ($request->file('images') as $image) {

                    $image_name = $image->getClientOriginalName();
                    
                    if ($image_name != 'blob') {

                        $image_name = date('Y-M-D-h-s') . '-' . $image_name;
                        $image->storeAs('/public/ChildImgProperty', $image_name);

                        $ChildImage = ChildImgProperty::create([
                            'property_id' => $data->id,
                            'image' => $image_name
                        ]);
                    
                    } else {
                        return RestApi::error(['Data Failed To Created'], 400);
                    }
                }  
            }
            
            if ($data) {
                return RestApi::success(['Data Successfully Created'], 201);
            } else {
                return RestApi::error(['Data Failed To Created'], 400);
            }

        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function delete($uuid){
        if (request()->wantsJson()) {
            
            $data = Property::where('uuid', $uuid)->with('ChildImg')->first();

            if (!isset($data)) {
                return RestApi::error(['Data Not Found!'], 404);
            }

            $child_img = $data->ChildImg;
            foreach ($child_img as $item) {
                Storage::delete("/public/ChildImgProperty/" . $item->image);
            }
            $data->delete();

            if ($data) {
                return RestApi::success(['Data Successfully Deleted'], 200);
            }

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }


public function set($uuid){
    if (request()->wantsJson()) {

        $property =  Property::where('uuid', $uuid)->first();
        if(!isset($property)){
            return response()->json(['message' => 'Data Not Found!'], 404);
        }
        
        if($property->pemilik_id != Auth::guard('api')->user()->id){
            $property->penyewa_id = Auth::guard('api')->user()->id;
            $property->save();
            
            return response()->json(['message' => 'Property ini Milik Mu', 'success' => true], 200);
        } else {
            return response()->json(['message' => 'Tidak Bisa Menyewa Property Sendiri!'], 401);
        }
        
    } else {
        return response()->json(['message' => 'bad request!'], 401);
    }
    
}

}
