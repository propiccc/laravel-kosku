<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->uuid()->unique();
            $table->string('logo');
            $table->string('no_telp')->nullable();
            $table->string('link_youtube')->nullable();
            $table->string('link_google_maps');
            $table->text('link_maps')->nullable();
            $table->string('link_facebook')->nullable();
            $table->text('address')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};