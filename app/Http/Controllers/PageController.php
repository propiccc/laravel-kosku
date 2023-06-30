<?php

namespace App\Http\Controllers;

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

            return response()->json([
                'slider' => $slider,
                'news' => $news,
                'profile' => $profile
                //     'youtube' => $profile->link_youtube,
                //     'contact' => $profile->no_telp,
                //     'maps' => $profile->link_maps,
            ]);
        } else {
            return response()->json(['message' => 'bad request!'], 401);
        }
    }
}