<?php

namespace Database\Factories;

use App\Models\Lead;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeadFactory extends Factory
{
    protected $model = Lead::class;

    public function definition()
    {
        $subject = fake()->randomElement([
            'General Inquiry',
            'Hostel Booking Question',
            'Price Inquiry',
            'Availability Check',
            'Facilities Question',
        ]);

        $sourcePages = [
            'home',
            'about',
            'contact',
            'hostels',
            'hostel-details',
            'blog',
            'blog-post',
        ];

        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'subject' => $subject,
            'message' => fake()->paragraph(rand(2, 5)),
            'source_page' => fake()->randomElement($sourcePages),
            'status' => fake()->randomElement(['new', 'contacted', 'converted', 'closed']),
            'created_at' => fake()->dateTimeBetween('-6 months', 'now'),
            'updated_at' => function (array $attributes) {
                return fake()->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }
}
