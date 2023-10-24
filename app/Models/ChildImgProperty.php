<?php

namespace App\Models;

use App\Traits\Uuid;
use App\Models\Property;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ChildImgProperty extends Model
{
    use HasFactory, Uuid;
    protected $fillable = ['image', 'property_id'];

    protected $appends = ['imagedir'];

    public function getImagedirAttribute()
    {
        return asset('storage/ChildImgProperty/' . $this->image);
    }
   
    public function Property()
    {
        return $this->belongsTo(Property::class, 'id', 'property_id');
    }
}
