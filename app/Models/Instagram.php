<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class Instagram extends Model
{
    use HasFactory, Uuid;

    protected $fillable = ['post_id', 'post_url', 'username', 'active'];



}