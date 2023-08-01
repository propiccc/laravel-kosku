<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Helpers\RestApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SettingController extends Controller
{
    public function index()
    {
        if (request()->wantsJson()) {
            $data = Setting::first();
            if (!isset($data)) {
                return response()->json(['No Data In Here!'], 404);
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
                'no_telp' => ['nullable', 'string'],
                'link_youtube' => ['nullable', 'string'],
                'link_maps' => ['nullable', 'string'],
                'link_facebook' => ['nullable', 'string'],
                'copyright' => ['nullable', 'string'],
                'address' => ['nullable', 'string'],
                'logo' => ['nullable', 'image', 'mimes:jpg,png']
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
            if ($req['logo'] && $request->hasFile('logo')) {
                $logo = $request->file('logo');
                $logo_name = $logo->getClientOriginalName();
                if ($logo_name != 'blob') {
                    $logo_name = date('Y-M-y') . '-' . $logo_name;
                    $logo->storeAs('/public/asset/logo', $logo_name);
                    $req['logo'] = $logo_name;
                } else {
                    unset($req['logo']);
                }
            }

            $data = Setting::create($req);

            if ($data) {
                return RestApi::success(['Data Successfully Created'], 201);
            } else {
                return RestApi::error(['Data Failed To Created'], 400);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
        ;
    }

    public function update(Request $request, $uuid)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'no_telp' => ['nullable', 'string'],
                'link_youtube' => ['nullable', 'string'],
                'link_maps' => ['nullable', 'string'],
                'link_facebook' => ['nullable', 'string'],
                'copyright' => ['nullable', 'string'],
                'address' => ['nullable', 'string'],
                'logo' => ['nullable', 'image', 'mimes:jpg,png']
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

            $setting = Setting::where('uuid', $uuid)->first();
            if (!isset($setting)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            if ($req['logo'] && $request->hasFile('logo')) {
                $logo = $request->file('logo');
                $logo_name = $logo->getClientOriginalName();
                if ($logo_name != 'blob') {
                    $logo_name = date('Y-M-y') . '-' . $logo_name;
                    Storage::delete("/public/asset/logo/" . $setting->logo);
                    $logo->storeAs('/public/asset/logo', $logo_name);
                    $req['logo'] = $logo_name;
                } else {
                    unset($req['logo']);
                }
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
            Storage::delete("/public/asset/logo/" . $setting->logo);

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