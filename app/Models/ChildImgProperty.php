<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class ChildImgProperty extends Model
{
    use HasFactory, Uuid;
    protected $fillable = [
        'image',
    ];
}
