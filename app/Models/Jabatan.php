<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class Jabatan extends Model
{
    use HasFactory, Uuid;
    protected $fillable = ['name', 'jabatan', 'uuid', 'image'];
    protected $appends = ['imagedir'];

    public function getImagedirAttribute()
    {
        return asset('storage/JabatanImage/' . $this->image);
    }
}