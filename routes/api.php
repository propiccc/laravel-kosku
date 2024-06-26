<?php

use App\Models\Property;

use App\Models\ChildImgProperty;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\DashboardController;

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
Route::post('/check', [AuthController::class, 'CheckUser']);


Route::prefix('public')->group(function(){
    Route::post('/resource', [PropertyController::class, 'GetProperty']);
});

Route::middleware('auth')->group(function () {

    Route::post('/dashboard', [DashboardController::class, 'getData']);
    
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::prefix('user')->group(function () {
        Route::post('/', [UserController::class, 'index']);
        Route::post('store', [UserController::class, 'store']);
        Route::post('{uuid}/edit', [UserController::class, 'show']);
        Route::post('{uuid}/update', [UserController::class, 'update']);
        Route::delete('{uuid}/delete', [UserController::class, 'delete']);
    });
    Route::prefix('payment')->group(function () {
        Route::post('/', [PaymentController::class, 'index']);
        Route::post('{uuid}/pending', [PaymentController::class, 'pending']);
        Route::post('{uuid}/snaptoken', [PaymentController::class, 'pay']);
    });
    
    Route::prefix('property')->group(function () {
        Route::post('/', [PropertyController::class, 'index']);
        Route::post('/pending', [PropertyController::class, 'PropertyPending']);
        Route::post('{uuid}/{token}/set', [PropertyController::class, 'set']);
        Route::post('/{uuid}/detail', [PropertyController::class, 'detail']);
        Route::post('/{uuid}/note', [PropertyController::class, 'note']);
        Route::post('store', [PropertyController::class, 'store']);
        Route::post('{uuid}/edit', [PropertyController::class, 'show']);
        Route::post('{uuid}/update', [PropertyController::class, 'update']);
        Route::post('childimgproperty/{uuid}/delete', [PropertyController::class, 'DeleteImage']);
        Route::delete('{uuid}/delete', [PropertyController::class, 'delete']);
    });
});