<?php

namespace Database\Factories;

use App\Models\Hostel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class HostelFactory extends Factory
{
    protected $model = Hostel::class;

    public function definition()
    {
        $title = fake()->company() . ' Hostel';
        $slug = Str::slug($title);

        $amenities = ['WiFi', 'TV Room', 'Laundry', 'Parking', 'Security'];

        $roomTypes = [
            ['type' => 'Single Room', 'occupancy' => 1],
            ['type' => 'Double Room', 'occupancy' => 2],
        ];

        $hostelImages = [
            "https://content.jdmagicbox.com/comp/delhi/v5/011pxx11.xx11.220727170629.k7v5/catalogue/clanbridge-living-girls-hostel-greater-noida-noida-paying-guest-accommodations-7gcre9nw3b.jpg",
            "https://images.jdmagicbox.com/comp/delhi/v5/011pxx11.xx11.220727170629.k7v5/catalogue/clanbridge-living-girls-hostel-greater-noida-greater-noida-paying-guest-accommodations-839zov5l79.jpg",
        ];

        return [
            'title' => $title,
            'slug' => $slug,
            'description' => 'This is a sample hostel description for testing purposes.',
            'thumbnail' => $hostelImages[0],
            'images' => json_encode($hostelImages),
            'address_line1' => '123 Test Street',
            'address_line2' => 'Apartment 456',
            'city' => 'Mumbai',
            'state' => 'Maharashtra',
            'country' => 'India',
            'pincode' => '400001',
            'rent_monthly' => 10000,
            'rent_quarterly' => 28500,
            'rent_yearly' => 102000,
            'rent_monthly_ac' => 13000,
            'rent_quarterly_ac' => 37050,
            'rent_yearly_ac' => 132600,
            'amenities' => json_encode($amenities),
            'room_types' => json_encode($roomTypes),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
