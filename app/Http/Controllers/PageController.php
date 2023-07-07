<?php

namespace App\Http\Controllers;

use App\Models\Divisi;
use App\Models\News;
use App\Models\Setting;
use App\Models\Slider;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function HomeData()
    {
        if (request()->wantsJson()) {
            $slider = Slider::all();
            $news = News::all();
            $profile = Setting::first();
            $divisi = Divisi::all();

            return response()->json([
                'slider' => $slider,
                'news' => $news,
                'divisi' => $divisi,
                'profile' => $profile
            ]);
        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }
}