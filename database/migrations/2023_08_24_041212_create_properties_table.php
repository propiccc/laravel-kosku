<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
          
            $table->integer('panjang');
            $table->integer('lebar');
            $table->enum('khusus', ['Putra', 'Putri', 'Campur'])->default('Campur');

            $table->text('description');
            $table->text('lokasi');
            $table->integer('harga');
            
            // * Relations Properties To users 
            $table->unsignedBiginteger('penyewa_id')->nullable();
            $table->foreign('penyewa_id')->references('id')->on('users')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
