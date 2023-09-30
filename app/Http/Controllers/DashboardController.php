<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Payment;
use App\Models\Property;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getData(){
        if (request()->wantsJson()) {
                
            return response()->json([
                'property' => Property::count(),
                'user' => User::count(),
                'payment' => Payment::where('status', 'success')->count(),
            ]);

        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }
}
