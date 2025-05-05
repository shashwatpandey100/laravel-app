<?php

namespace App\Http\Middleware;

use App\Models\Agency;
use App\Models\Facility;
use App\Models\Hostel;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Illuminate\Support\Facades\Cache;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'flash' => [
                'toast' => fn() => $request->session()->get('toast'),
            ],
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn(): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'url' => $request->url(),
            'allHostels' => fn() => Cache::remember('all_hostels', 600, function () {
                return Hostel::select('id', 'title', 'slug', 'thumbnail', 'city', 'state', 'room_types')
                    ->orderBy('title')
                    ->get()
                    ->map(function ($hostel) {
                        return [
                            'id' => $hostel->id,
                            'title' => $hostel->title,
                            'slug' => $hostel->slug,
                            'thumbnail' => $hostel->thumbnail,
                            'location' => "{$hostel->city}, {$hostel->state}",
                            'room_types' => $hostel->room_types
                        ];
                    });
            }),
            'facilities' => fn() => Cache::remember('all_facilities', 600, function () {
                return Facility::select('id', 'title', 'slug', 'thumbnail', 'image', 'icon', 'headline', 'description')
                    ->orderBy('title')
                    ->get()
                    ->map(function ($facility) {
                        return [
                            'id' => $facility->id,
                            'title' => $facility->title,
                            'slug' => $facility->slug,
                            'thumbnail' => $facility->thumbnail,
                            'image' => $facility->image,
                            'icons' => $facility->icon,
                            'headline' => $facility->headline,
                            'description' => $facility->description,
                        ];
                    });
            }),
            'agency' => fn() => Cache::remember('agency_info', 3600, function () {
                $agency = Agency::first();

                return $agency
                    ? $agency
                    : [
                        'name' => 'Raghuma Hostels',
                        'phones' => ['9315312530'],
                        'emails' => ['raghumahostel@gmail.com'],
                        'description' => "At Raghuma Hostel, we offer a variety of accommodation options to suit every customer' s needs . Whether you 're solo, with friends, or in a group, our hostel provides the perfect space for rest and relaxation.",
                        'addresses' => ['Your Hostel Address, City, State, PIN'],
                        'social_links' => [
                            ['platform' => 'Facebook', 'url' => 'https://facebook.com/raghumahostels'],
                            ['platform' => 'Twitter', 'url' => 'https://twitter.com/raghumahostels'],
                            ['platform' => 'Instagram', 'url' => 'https://instagram.com/raghumahostels'],
                        ],
                    ];
            }),
        ];
    }
}
