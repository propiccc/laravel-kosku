<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Helpers\RestApi;
use App\Models\Property;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    public function pay($uuid){
        \Midtrans\Config::$serverKey = 'SB-Mid-server-GF7ID6j8OsjbhNJqruKpd--Z';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;
    
        $property = Property::where('uuid', $uuid)->first();
        if (!isset($property)) {    
            return RestApi::error(['Data Not Found!'], 404);
        }
        
        if($property->pemilik_id != Auth::guard('api')->user()->id){
            $params = [
                'transaction_details' => [
                    'order_id' =>  Str::random(36) . date('His') ,
                    'gross_amount' => $property->harga,
                ],
                'customer_details' => [
                    'first_name' => Auth::guard('api')->user()->name,
                    'email' => Auth::guard('api')->user()->email,
                ]
            ];
        
            $snapToken = \Midtrans\Snap::getSnapToken($params);
            return  response()->json(['token' => $snapToken], 200);
    
        } else {
            return response()->json(['message' => 'Tidak Bisa Menyewa Property Sendiri!'], 401);
        }
    
    }

    public function pending(Request $request, $uuid){
        if (request()->wantsJson()) {
            
            $validate = Validator::make($request->all(), [
                'token' => ['required', 'string']
            ]);
    
            if ($validate->fails()) {

                $message = [];

                $errors = $validate->errors();
                foreach ($errors->messages() as $err) {
                    $message[] = $err[0];
                }

                return RestApi::error($message, 400);
            }

            $property  = Property::where('uuid', $uuid)->first();

            if(!isset($property)){
                return response()->json(['success' => false,  'message' => 'Data Not Found!'], 404);
            }

            if($property->penyewa_id != null){
                return response()->json(['success' => false,  'message' => 'Property = Ini Sudah ADa Pemilik Nya'], 404);
            };

            $payment = Payment::create([
                'property_id' => $property->id,
                'user_id' => Auth::guard('api')->user()->id,
                'status' => 'pending',
                'token' =>  $request->token
            ]);

            return response()->json(['success' => true, 'message' => 'Data Di Simpan Di Antrian Sewa'], 200);
        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }
    
}
