<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class News extends Model
{
    use HasFactory, uuid;

    protected $fillable = [
        'image'
    ];
    protected $appends = ['imagedir'];

    public function getImagedirAttribute()
    {
        return asset('storage/NewsImage/' . $this->image);
    }
}