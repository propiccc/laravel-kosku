<?php

namespace App\Http\Controllers;

use App\Helpers\RestApi;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        if (request()->wantsJson()) {
            $request->validate([
                'search' => ['nullable', 'string'],
                'tampilkan' => ['nullable', 'string']
            ]);

            $data = User::where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('email', 'LIKE', "%" . $request->search . "%")
                ->paginate(isset($request->tampilkan) ? $request->tampilkan : 10);

            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }
    public function store(Request $request)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'image.*' => ['required','mimes:png,jpg'],
                'panjang' => ['required'],
                'lebar' => ['required'],
                'lokasi' => ['required'],
                'description' => ['required'],
                'khusus' => ['required'],
                'harga' => ['required'],
            ]);


            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }   
                return RestApi::error($message, 400);
            }



            if($request->has('image') && count($request['image']) != 0){
                $Image = $request->image;

              
                
                $ImageCol = $Image->map(function($item) {									
                    return [
                            'image' => $item->filename,
                        ];
                    });

                dd($ImageCol);
                // $ChildImage = ChildImgProperty::create([
                    
                // ])
                // $data = Property::create([
                //     'panjang' => ['required'],
                //     'lebar' => ['required'],
                //     'lokasi' => ['required'],
                //     'description' => ['required'],
                //     'khusus' => ['required'],
                //     'harga' => ['required'],
                // ]);
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

}
