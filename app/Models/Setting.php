<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class Setting extends Model
{
    use HasFactory, Uuid;

    protected $fillable = [
        'no_telp',
        'link_youtube',
        'link_maps',
        'link_facebook',
        'copyright',
        'logo',
        'address'
    ];

    protected $appends = ['logodir'];

    public function getLogodirAttribute()
    {
        return asset('storage/asset/logo/' . $this->logo);
    }
}