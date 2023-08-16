<?php

namespace App\Http\Controllers;

use App\Helpers\RestApi;
use App\Models\Instagram;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InstagramController extends Controller
{
    //
    public function index(Request $request)
    {
        if (request()->wantsJson()) {
            $request->validate([
                'search' => ['nullable', 'string'],
                'tampilkan' => ['nullable', 'string']
            ]);

            $data = Instagram::paginate(isset($request->tampilkan) ? $request->tampilkan : 10);

            return response()->json($data, 200);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }

    public function store(Request $request)
    {
        if (request()->wantsJson()) {
            $validate = Validator::make($request->all(), [
                'id' => ['required', 'integer'],
                'media_url' => ['required', 'string'],
                'username' => ['required', 'string'],
            ]);
            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }
                return RestApi::error($message, 400);
            }
            $data = Instagram::create([
                'post_id' => $request->id,
                'media_url' => $request->media_url,
                'username' => $request->username
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
            $data = Instagram::where('uuid', $uuid)->first();
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
                'post_id' => ['required', 'integer'],
                'post_url' => ['required', 'string'],
                'username' => ['required', 'string'],
            ]);

            if ($validate->fails()) {
                $message = [];
                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }
                return RestApi::error($message, 400);
            }

            $Instagram = Instagram::where('uuid', $uuid)->first();
            if (!isset($Instagram)) {
                return RestApi::error(['Data Not Found!'], 404);
            }

            $Instagram = $Instagram->update([
                'post_id' => $request->post_id,
                'post_url' => $request->post_url,
                'username' => $request->username
            ]);
            if ($Instagram) {
                return RestApi::success(['Data Successfully Update'], 200);
            } else {
                return RestApi::error(['Data Failed To Update'], 400);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function status($uuid){
        
        if (request()->wantsJson()) {

            $Instagram = Instagram::where('uuid', $uuid)->first();
            if (!isset($Instagram)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            $Instagram->active = !$Instagram->active;
            $Instagram->save();
            if ($Instagram) {
                return RestApi::success(['Data Successfully Updatet'], 200);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

    public function delete($uuid)
    {
        if (request()->wantsJson()) {

            $Instagram = Instagram::where('uuid', $uuid)->first();
            if (!isset($Instagram)) {
                return RestApi::error(['Data Not Found!'], 404);
            }
            $Instagram->delete();
            if ($Instagram) {
                return RestApi::success(['Data Successfully Deleted'], 200);
            }
        } else {
            return RestApi::error(['Bad Request!'], 400);
        }
    }

}