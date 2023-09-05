<?php

namespace App\Models;

use App\Traits\Uuid;
use App\Models\ChildImgProperty;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Property extends Model
{
    use HasFactory, Uuid;

    protected $fillable =  ['hero_image', 'color', 'panjang', 'lebar','description', 'khusus', 'lokasi', 'harga'];

    public function ChildImg()
    {
        return $this->hasMany(ChildImgProperty::class, 'property_id', 'id');
    }
}
