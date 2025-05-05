<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\BookingRequest;
use App\Models\Hostel;
use App\Models\Lead;
use App\Models\Subscription;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            AdminUserSeeder::class,
            AgencySeeder::class,
        ]);

        $hostels = Hostel::factory()->count(5)->create();

        $hostelIds = $hostels->pluck('id')->toArray();

        BookingRequest::factory()
            ->count(67)
            ->state(function (array $attributes) use ($hostelIds) {
                return [
                    'hostel_id' => $hostelIds[array_rand($hostelIds)],
                ];
            })
            ->create();

        Lead::factory()->count(112)->create();
        Subscription::factory()->count(85)->create();
        BlogPost::factory()->count(24)->create();
    }
}
