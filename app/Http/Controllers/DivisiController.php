<?php

namespace App\Http\Controllers;

use App\Models\Divisi;
use App\Helpers\RestApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class DivisiController extends Controller
{
    public function index(Request $request)
    {
        if (request()->wantsJson()) {
            $request->validate([
                'search' => ['nullable', 'string'],
                'tampilkan' => ['nullable', 'string']
            ]);

            $data = Divisi::where('title', 'LIKE', "%" . $request->search . "%")
                ->paginate(isset($request->tampilkan) ? $request->tampilkan : 10);

            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function PublicDivisi()
    {
        if (request()->wantsJson()) {
            $data = Divisi::all();
            return response()->json($data, 200);
        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function store(Request $request)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'image' => ['required', 'image', 'mimes:jpg,png'],
                'title' => ['string', 'required'],
                'description' => ['string', 'required']
            ]);

            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }
                return RestApi::error($message, 400);
            }

            $req = $request->all();
            if ($req['image'] && $request->hasFile('image')) {

                $image = $request->file('image');
                $image_name = $image->getClientOriginalName();

                if ($image_name != 'blob') {
                    $image->storeAs('/public/DivisiImage', $image_name);
                    $req['image'] = $image_name;
                } else {
                    unset($req['image']);
                }
            }

            $data = Divisi::create($req);
            if ($data) {
                return RestApi::success(['Data Successfully Created'], 201);
            } else {
                return RestApi::error(['Data Failed To Created'], 400);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function show($uuid)
    {
        if (request()->wantsJson()) {
            $data = Divisi::where('uuid', $uuid)->first();
            if (!isset($data)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            return RestApi::success($data, 200);
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function update(Request $request, $uuid)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'image' => ['nullable', 'image', 'mimes:jpg,png'],
                'title' => ['string', 'required'],
                'description' => ['string', 'required']
            ]);

            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }
                return RestApi::error($message, 400);
            }

            $Divisi = Divisi::where('uuid', $uuid)->first();
            if (!isset($Divisi)) {
                return RestApi::error(['Data Not Found!'], 404);
            }

            $req = $request->all();
            if ($req['image'] && $request->hasFile('image')) {
                $image = $request->file('image');
                $image_name = $image->getClientOriginalName();
                if ($image_name != 'blob') {
                    Storage::delete("/public/DivisiImage/" . $Divisi->image);
                    $image->storeAs('/public/DivisiImage', $image_name);
                    $req['image'] = $image_name;
                } else {
                    unset($req['image']);
                }
            }

            $Divisi = $Divisi->update($req);
            if ($Divisi) {
                return RestApi::success(['Data Successfully Update'], 200);
            } else {
                return RestApi::error(['Data Failed To Update'], 400);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function delete($uuid)
    {
        if (request()->wantsJson()) {

            $Divisi = Divisi::where('uuid', $uuid)->first();

            if (!isset($Divisi)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            Storage::delete("/public/DivisiImage/" . $Divisi->image);
            $Divisi->delete();
            if ($Divisi) {
                return RestApi::success(['Data Successfully Deleted'], 200);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }
}