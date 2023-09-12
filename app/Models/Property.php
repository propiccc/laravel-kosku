<?php

namespace App\Models;

use App\Models\User;
use App\Traits\Uuid;
use App\Models\ChildImgProperty;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Property extends Model
{
    use HasFactory, Uuid;

    protected $fillable =  ['color', 'panjang', 'lebar','description', 'khusus', 'lokasi', 'harga', 'penyewa_id','pemilik_id'];

    public function ChildImg()
    {
        return $this->hasMany(ChildImgProperty::class, 'property_id', 'id');
    }

    public function Pemilik()
    {
        return $this->belongsTo(User::class, 'id', 'pemilik_id');
    }
}
