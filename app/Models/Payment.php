<?php

namespace App\Models;

use App\Traits\Uuid;
use App\Models\Property;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory, Uuid;

    protected $fillable = ['uuid','property_id','user_id', 'status', 'token'];

    public function property()
    {
        return $this->belongsTo(Property::class, 'property_id', 'id');
    }
}
