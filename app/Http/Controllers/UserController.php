<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;

class UserController extends Controller
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


}