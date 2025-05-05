<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hostels', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('thumbnail')->nullable();
            $table->json('images')->nullable();
            $table->string('address_line1');
            $table->string('address_line2')->nullable();
            $table->string('city');
            $table->string('state');
            $table->string('country');
            $table->string('pincode');
            $table->decimal('rent_monthly', 10, 2);
            $table->decimal('rent_quarterly', 10, 2);
            $table->decimal('rent_yearly', 10, 2);
            $table->decimal('rent_monthly_ac', 10, 2);
            $table->decimal('rent_quarterly_ac', 10, 2);
            $table->decimal('rent_yearly_ac', 10, 2);
            $table->json('amenities')->nullable();
            $table->json('room_types')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hostels');
    }
};
