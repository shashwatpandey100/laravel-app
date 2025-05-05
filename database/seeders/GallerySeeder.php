<?php

namespace Database\Seeders;

use App\Models\Facility;
use App\Models\Gallery;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    public function run(): void
    {
        Gallery::create([
            "title" => "A block",
            "image_path" => "https://raghumahostels.com/public/images/photos/uWj3qXT0w594xRtBrb8tyI2DRERZiuYSu3WHBho6.jpg",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Gallery::create([
            "title" => "B block",
            "image_path" => "https://raghumahostels.com/public/images/photos/WqDC0JvbJjw5rjnCIGrOGGoRk1mOBJbJF1PFWzAd.jpg",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Gallery::create([
            "title" => "C block",
            "image_path" => "https://raghumahostels.com/public/images/photos/1712645227.jpeg",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Gallery::create([
            "title" => "Sports",
            "image_path" => "https://raghumahostels.com/public/images/photos/1712748658.jpeg",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Gallery::create([
            "title" => "Gym",
            "image_path" => "https://raghumahostels.com/public/images/photos/1712748736.jpeg",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Gallery::create([
            "title" => "Cafeteria",
            "image_path" => "https://raghumahostels.com/public/images/photos/1712748781.jpeg",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
