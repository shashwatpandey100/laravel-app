<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('booking_requests', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('hostel_id')->constrained('hostels')->onDelete('cascade');
            $table->string('phone');
            $table->string('room_type');
            $table->string('email');
            $table->text('message')->nullable();
            $table->enum('status', ['new', 'processed', 'confirmed', 'cancelled'])->default('new');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('booking_requests');
    }
};
