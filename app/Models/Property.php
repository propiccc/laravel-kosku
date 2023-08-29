<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class Property extends Model
{
    use HasFactorym, Uuid;

    protected $fillable =  ['hero_image', 'color', 'panjang', 'lebar'];
}
