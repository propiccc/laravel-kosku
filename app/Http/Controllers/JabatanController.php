<?php

namespace App\Http\Controllers;

use App\Models\Jabatan;
use App\Helpers\RestApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class JabatanController extends Controller
{
    public function index(Request $request)
    {
        if (request()->wantsJson()) {
            $request->validate([
                'search' => ['nullable', 'string'],
                'tampilkan' => ['nullable', 'string']
            ]);

            $data = Jabatan::paginate(isset($request->tampilkan) ? $request->tampilkan : 10);

            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function PublicJabatan()
    {
        if (request()->wantsJson()) {
            $data = Jabatan::all();
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
                'name' => ['string', 'required', 'min:3'],
                'jabatan' => ['string', 'required', 'min:3']
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
                    $image_name = date('Y-M-y') . '-' . $image_name;
                    $image->storeAs('/public/JabatanImage', $image_name);
                    $req['image'] = $image_name;
                } else {
                    unset($req['image']);
                }
            }
            $data = Jabatan::create($req);

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
            $data = Jabatan::where('uuid', $uuid)->first();
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
                'name' => ['string', 'nullable', 'min:3'],
                'jabatan' => ['string', 'nullable', 'min:3']
            ]);

            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }
                return RestApi::error($message, 400);
            }

            $Jabatan = Jabatan::where('uuid', $uuid)->first();
            if (!isset($Jabatan)) {
                return RestApi::error(['Data Not Found!'], 404);
            }

            $req = $request->all();
            if ($req['image'] && $request->hasFile('image')) {
                $image = $request->file('image');
                $image_name = $image->getClientOriginalName();
                if ($image_name != 'blob') {
                    Storage::delete("/public/JabatanImage/" . $Jabatan->image);
                    $image_name = date('Y-M-y') . '-' . $image_name;
                    $image->storeAs('/public/JabatanImage', $image_name);
                    $req['image'] = $image_name;
                } else {
                    unset($req['image']);
                }
            }

            $Jabatan = $Jabatan->update($req);

            if ($Jabatan) {
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

            $Jabatan = Jabatan::where('uuid', $uuid)->first();

            if (!isset($Jabatan)) {
                return RestApi::error(['Data Not Found!'], 404);
            }

            Storage::delete("/public/JabatanImage/" . $Jabatan->image);
            $Jabatan->delete();

            if ($Jabatan) {
                return RestApi::success(['Data Successfully Deleted'], 200);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }
}