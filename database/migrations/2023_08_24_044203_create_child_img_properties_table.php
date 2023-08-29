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
        Schema::create('child_img_properties', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('image');
            
            // * Relations Child Image Properties To Properties
            $table->unsignedBiginteger('property_id')->nullable();
            $table->foreign('property_id')->references('id')->on('properties')->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('child_img_properties');
    }
};
