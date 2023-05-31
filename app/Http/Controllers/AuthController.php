<?php

namespace App\Http\Controllers;

use App\Helpers\RestApi;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        if ($validate->fails()) {
            $errors = $validate->errors();
            $message = [];
            foreach ($errors->messages() as $err) {
                $message[] = $err[0];
            }
            return RestApi::error($message, 400);
        }

        $user = User::where('name', $request->username)
            ->orWhere('email', $request->username)->first();
        if (!isset($user)) {
            return response()->json(['message' => 'Data Not Found!'], 404);
        }

        if ($token = Auth::attempt(['email' => $user->email, 'password' => $request->password])) {
            return RestApi::success([
                'user' => Auth::user(),
                'access_token' => $token
            ], 200, 'success');
        } else {
            // Auth::logout();
            if (Auth::check()) {
                Auth::logout();
            }
            return response()->json(['message' => 'Faild For Authenticate!'], 400);
        }
    }

    public function CheckUser()
    {
        if (request()->wantsJson()) {
            // if (Auth::check()) {
            //     return response(['auth' => true], 200);
            // } else {
            //     return response(['auth' => false], 200);
            // }
            return response()->json(['auth' => Auth::check()]);
        }
    }
}