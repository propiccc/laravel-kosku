<?php

namespace App\Models;

use App;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class Content extends Model
{
    use HasFactory, Uuid;
    protected $fillable = ['title', 'body', 'image'];

    protected $appends = ['imagedir'];

    public function getImagedirAttribute()
    {
        return asset('storage/ContentImage/' . $this->image);
    }
}