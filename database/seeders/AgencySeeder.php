<?php

namespace Database\Seeders;

use App\Models\Agency;
use Illuminate\Database\Seeder;

class AgencySeeder extends Seeder
{
    public function run(): void
    {
        Agency::create([
            'name' => 'YourHostel Agency',
            'logo' => 'images/logo.png',
            'description' => 'YourHostel Agency is a premier provider of hostel accommodation services for students and working professionals. With over 10 years of experience in the industry, we offer comfortable, safe, and affordable housing solutions across multiple locations in the city.',
            'social_links' => [
                'facebook' => 'https://facebook.com/yourhostel',
                'twitter' => 'https://twitter.com/yourhostel',
                'instagram' => 'https://instagram.com/yourhostel',
                'linkedin' => 'https://linkedin.com/company/yourhostel',
                'youtube' => 'https://youtube.com/channel/yourhostel',
            ],
            'addresses' => [
                [
                    'line1' => '123 Main Street',
                    'line2' => 'Suite 101',
                    'city' => 'Mumbai',
                    'state' => 'Maharashtra',
                    'pincode' => '400001',
                    'country' => 'India',
                    'is_primary' => true,
                ],
                [
                    'line1' => '456 Park Avenue',
                    'line2' => 'Floor 3',
                    'city' => 'Delhi',
                    'state' => 'Delhi',
                    'pincode' => '110001',
                    'country' => 'India',
                    'is_primary' => false,
                ],
            ],
            'phones' => [
                '+91 9876543210',
                '+91 9988776655',
                '022-12345678',
            ],
            'emails' => [
                'info@yourhostel.com',
                'support@yourhostel.com',
                'bookings@yourhostel.com',
            ],
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
