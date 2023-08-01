<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\DivisiController;
use App\Http\Controllers\InstagramController;
use App\Http\Controllers\JabatanController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VisiMisiController;
use App\Http\Controllers\SettingController;
use Illuminate\Support\Facades\Artisan;
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
Route::prefix('/public')->group(function () {
    Route::post('/home/resource', [PageController::class, 'HomeData']);
});

Route::post('/check', [AuthController::class, 'CheckUser']);
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
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
        Route::post('/', [SliderController::class, 'index']);
        Route::post('/store', [SliderController::class, 'store']);
        Route::post('{uuid}/edit', [SliderController::class, 'show']);
        Route::post('{uuid}/update', [SliderController::class, 'update']);
        Route::delete('{uuid}/delete', [SliderController::class, 'delete']);
    });
    Route::prefix('jabatan')->group(function () {
        Route::post('/', [JabatanController::class, 'index']);
        Route::post('/store', [JabatanController::class, 'store']);
        Route::post('{uuid}/edit', [JabatanController::class, 'show']);
        Route::post('{uuid}/update', [JabatanController::class, 'update']);
        Route::delete('{uuid}/delete', [JabatanController::class, 'delete']);
    });

    Route::prefix('setting')->group(function () {
        Route::post('/', [SettingController::class, 'index']);
        Route::post('/store', [SettingController::class, 'store']);
        Route::post('{uuid}/edit', [SettingController::class, 'show']);
        Route::post('{uuid}/update', [SettingController::class, 'update']);
        Route::delete('{uuid}/delete', [SettingController::class, 'delete']);
    });
    Route::prefix('divisi')->group(function () {
        Route::post('/', [DivisiController::class, 'index']);
        Route::post('/store', [DivisiController::class, 'store']);
        Route::post('{uuid}/edit', [DivisiController::class, 'show']);
        Route::post('{uuid}/update', [DivisiController::class, 'update']);
        Route::delete('{uuid}/delete', [DivisiController::class, 'delete']);
    });
    Route::prefix('news')->group(function () {
        Route::post('/', [NewsController::class, 'index']);
        Route::post('/store', [NewsController::class, 'store']);
        Route::post('{uuid}/edit', [NewsController::class, 'show']);
        Route::post('{uuid}/update', [NewsController::class, 'update']);
        Route::delete('{uuid}/delete', [NewsController::class, 'delete']);
    });
    Route::prefix('content')->group(function () {
        Route::post('/', [ContentController::class, 'index']);
        Route::post('/store', [ContentController::class, 'store']);
        Route::post('{uuid}/edit', [ContentController::class, 'show']);
        Route::post('{uuid}/update', [ContentController::class, 'update']);
        Route::delete('{uuid}/delete', [ContentController::class, 'delete']);
    });
    Route::prefix('instagram')->group(function () {
        Route::post('/', [InstagramController::class, 'index']);
        Route::post('/store', [InstagramController::class, 'store']);
        Route::post('{uuid}/edit', [InstagramController::class, 'show']);
        Route::post('{uuid}/update', [InstagramController::class, 'update']);
        Route::delete('{uuid}/delete', [InstagramController::class, 'delete']);
    });

});