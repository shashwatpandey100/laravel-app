<?php

namespace Database\Factories;

use App\Models\BookingRequest;
use App\Models\Hostel;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookingRequestFactory extends Factory
{
    protected $model = BookingRequest::class;

    public function definition()
    {
        $roomTypes = ['Single Room', 'Double Room', 'Triple Room', 'Dormitory', 'Single Room AC', 'Double Room AC'];

        return [
            'name' => fake()->name(),
            'hostel_id' => function () {
                return Hostel::inRandomOrder()->first()->id ?? Hostel::factory()->create()->id;
            },
            'phone' => fake()->phoneNumber(),
            'room_type' => fake()->randomElement($roomTypes),
            'email' => fake()->safeEmail(),
            'message' => fake()->optional(0.7)->paragraph(rand(1, 3)),
            'status' => fake()->randomElement(['new', 'processed', 'confirmed', 'cancelled']),
            'created_at' => fake()->dateTimeBetween('-3 months', 'now'),
            'updated_at' => function (array $attributes) {
                return fake()->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }
}
