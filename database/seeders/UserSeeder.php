<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
 
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin@123'),
            'role' => 'admin'
        ]);
        User::create([
            'name' => 'alex',
            'email' => 'alex@gmail.com',
            'password' => Hash::make('admin@123')
        ]);
        User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('admin@123')
        ]);
    }
}