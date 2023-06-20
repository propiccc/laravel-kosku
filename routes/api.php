<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VisiMisiController;
use App\Http\Controllers\SettingController;
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
Route::post('/login', [AuthController::class, 'login']);

Route::prefix('public')->group(function () {
    Route::get('/slider', [SliderController::class, 'fetch']);
});

Route::middleware('auth')->group(function () {
    Route::post('/check', [AuthController::class, 'CheckUser']);

    Route::prefix('user')->group(function () {
        Route::post('/', [UserController::class, 'index']);
        Route::post('/store', [UserController::class, 'store']);
        Route::post('{uuid}/edit', [UserController::class, 'show']);
        Route::post('{uuid}/update', [UserController::class, 'update']);
        Route::delete('{uuid}/delete', [UserController::class, 'delete']);
    });

    Route::prefix('visimisi')->group(function () {
        Route::post('/', [VisiMisiController::class, 'index']);
        Route::post('/store', [VisiMisiController::class, 'store']);
        Route::post('{uuid}/edit', [VisiMisiController::class, 'show']);
        Route::post('{uuid}/update', [VisiMisiController::class, 'update']);
        Route::delete('{uuid}/delete', [VisiMisiController::class, 'delete']);
    });

    Route::prefix('slider')->group(function () {
        Route::post('/', [SliderController::class, 'fetch']);
        Route::post('/store', [SliderController::class, 'store']);
        Route::post('{uuid}/edit', [SliderController::class, 'show']);
        Route::post('{uuid}/update', [SliderController::class, 'update']);
        Route::delete('{uuid}/delete', [SliderController::class, 'delete']);
    });

    Route::prefix('setting')->group(function () {
        Route::post('/', [SettingController::class, 'index']);
        Route::post('/store', [SettingController::class, 'store']);
        Route::post('{uuid}/edit', [SettingController::class, 'show']);
        Route::post('{uuid}/update', [SettingController::class, 'update']);
        Route::delete('{uuid}/delete', [SettingController::class, 'delete']);
    });
});