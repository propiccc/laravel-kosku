<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Helpers\RestApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class SettingController extends Controller
{
    public function index(Request $request)
    {
        if (request()->wantsJson()) {
            $request->validate([
                'search' => ['nullable', 'string'],
                'tampilkan' => ['nullable', 'string']
            ]);

            $data = Setting::where('no_telp', 'LIKE', "%" . $request->search . "%")
                ->orWhere('link_youtube', 'LIKE', "%" . $request->search . "%")
                ->orWhere('link_maps', 'LIKE', "%" . $request->search . "%")
                ->orWhere('link_facebook', 'LIKE', "%" . $request->search . "%")
                ->orWhere('link_twitter', 'LIKE', "%" . $request->search . "%")
                ->orWhere('copyright', 'LIKE', "%" . $request->search . "%")
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
                'no_telp' => ['required', 'string'],
                'link_youtube' => ['required', 'string'],
                'link_maps' => ['required', 'string'],
                'link_facebook' => ['required', 'string'],
                'link_twitter' => ['required', 'string'],
                'copyright' => ['required', 'string']
            ]);

            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }
                return RestApi::error($message, 400);
            }

            $data = Setting::create([
                'no_telp' => $request->no_telp,
                'link_youtube' => $request->link_youtube,
                'link_maps' => $request->link_maps,
                'link_facebook' => $request->link_facebook,
                'link_twitter' => $request->link_twitter,
                'copyright' => $request->copyright
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
            $setting = Setting::where('uuid', $uuid)->first();
            if (!isset($setting)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            return RestApi::success($setting, 200);
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function update(Request $request, $uuid)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'no_telp' => ['required', 'string'],
                'link_youtube' => ['required', 'string'],
                'link_maps' => ['required', 'string'],
                'link_facebook' => ['required', 'string'],
                'link_twitter' => ['required', 'string'],
                'copyright' => ['required', 'string']
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

            $setting = Setting::where('uuid', $uuid)->first();
            if (!isset($setting)) {
                return RestApi::error(['Data Not Found!'], 404);
            }

            $setting = $setting->update($req);

            if ($setting) {
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

            $setting = Setting::where('uuid', $uuid)->first();


            if (!isset($setting)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            $setting->delete();
            if ($setting) {
                return RestApi::success(['Data Successfully Deleted'], 200);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }
}
