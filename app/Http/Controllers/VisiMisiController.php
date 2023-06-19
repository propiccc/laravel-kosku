<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\VisiMisi;

use App\Helpers\RestApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class VisiMisiController extends Controller
{
    public function index(Request $request)
    {
        if (request()->wantsJson()) {
            $request->validate([
                'search' => ['nullable', 'string'],
                'tampilkan' => ['nullable', 'string']
            ]);

            $data = VisiMisi::where('visi', 'LIKE', "%" . $request->search . "%")
                ->orWhere('misi', 'LIKE', "%" . $request->search . "%")
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
                'visi' => ['required', 'string'],
                'misi' => ['required', 'string']
            ]);

            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }
                return RestApi::error($message, 400);
            }

            $data = VisiMisi::create([
                'visi' => $request->visi,
                'misi' => $request->misi,
            ]);

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
            $visimisi = VisiMisi::where('uuid', $uuid)->first();
            if (!isset($visimisi)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            return RestApi::success($visimisi, 200);
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function update(Request $request, $uuid)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'visi' => ['required', 'string'],
                'misi' => ['required', 'string'],
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
            if ($request->password != "" && $request->password != null) {
                $req['password'] = Hash::make($request->password);
            } else {
                unset($req["password"]);
            }

            $visimisi = VisiMisi::where('uuid', $uuid)->first();
            if (!isset($visimisi)) {
                return RestApi::error(['Data Not Found!'], 404);
            }

            $visimisi = $visimisi->update($req);

            if ($visimisi) {
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

            $visimisi = VisiMisi::where('uuid', $uuid)->first();


            if (!isset($visimisi)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            $visimisi->delete();
            if ($visimisi) {
                return RestApi::success(['Data Successfully Deleted'], 200);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }
}
