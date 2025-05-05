<?php

namespace Database\Factories;

use App\Models\BlogPost;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BlogPostFactory extends Factory
{
    protected $model = BlogPost::class;

    public function definition()
    {
        $title = fake()->sentence(rand(4, 8));
        $slug = Str::slug($title);

        $content = '<h2>' . fake()->sentence(rand(4, 8)) . '</h2>';
        $content .= '<p>' . fake()->paragraph(rand(3, 5)) . '</p>';
        $content .= '<p>' . fake()->paragraph(rand(3, 5)) . '</p>';
        $content .= '<h3>' . fake()->sentence(rand(4, 6)) . '</h3>';
        $content .= '<p>' . fake()->paragraph(rand(3, 5)) . '</p>';
        $content .= '<p>' . fake()->paragraph(rand(3, 5)) . '</p>';
        $content .= '<ul>';

        for ($i = 0; $i < rand(3, 5); $i++) {
            $content .= '<li>' . fake()->sentence() . '</li>';
        }

        $content .= '</ul>';
        $content .= '<p>' . fake()->paragraph(rand(3, 5)) . '</p>';

        $randomNumber = rand(1, 100);
        $thumbnail = "https://loremflickr.com/800/800?random={$randomNumber}";

        return [
            'title' => $title,
            'slug' => $slug,
            'content' => $content,
            'thumbnail' => $thumbnail,
            'published' => fake()->boolean(80),
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => function (array $attributes) {
                return fake()->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }
}
