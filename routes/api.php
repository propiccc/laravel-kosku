<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => ['required', 'string'],
        'password' => ['required', 'string']
    ]);

    $credentials = [
        'email' => $request->email,
        'password' => $request->password
    ];

    $data = Auth::attempt($credentials);
    if ($data) {
        return response()->json([
            'user' => Auth::user(),
            'token' => $data
        ]);
    };
    return response()->json([
        'message' => 'failed to login!'
    ]);

});

Route::middleware('auth')->group(function () {
    Route::post('/user', function () {
        return response()->json(['user' => Auth::user()]);
    });
});