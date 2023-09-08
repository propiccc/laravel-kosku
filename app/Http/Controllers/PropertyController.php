<?php

namespace App\Http\Controllers;

use App\Helpers\RestApi;
use App\Models\Property;
use Illuminate\Http\Request;
use App\Models\ChildImgProperty;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        if (request()->wantsJson()) {
            
            $data = Property::with('ChildImg')->latest()->get();            
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

            $data = Property::create([
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

                        $image_name = date('Y-M-y') . '-' . $image_name;
                        $image->storeAs('/public/ChildImgProperty', $image_name);

                        $ChildImage = ChildImgProperty::create([
                            'property_id' => $data->id,
                            'image' => $image_name
                        ]);
                    
                    } else {
                        return RestApi::error(['Data Failed To Created'], 400);
                    }
                    
                }
                
                if ($data) {
                    return RestApi::success(['Data Successfully Created'], 201);
                } else {
                    return RestApi::error(['Data Failed To Created'], 400);
                }
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

                        $image_name = date('Y-M-y') . '-' . $image_name;
                        $image->storeAs('/public/ChildImgProperty', $image_name);

                        $ChildImage = ChildImgProperty::create([
                            'property_id' => $data->id,
                            'image' => $image_name
                        ]);
                    
                    } else {
                        return RestApi::error(['Data Failed To Created'], 400);
                    }
                    
                }
                
                if ($data) {
                    return RestApi::success(['Data Successfully Created'], 201);
                } else {
                    return RestApi::error(['Data Failed To Created'], 400);
                }
            }

        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

}
