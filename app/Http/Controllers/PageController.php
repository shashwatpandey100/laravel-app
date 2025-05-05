<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Facility;
use App\Models\Gallery;
use App\Models\Hostel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $galleryImages = Gallery::latest()->take(6)->get();
        return Inertia::render('(web)/home/home', [
            'galleryImages' => $galleryImages,
        ]);
    }

    public function about()
    {
        return Inertia::render('(web)/about/about');
    }

    public function hostels()
    {
        return Inertia::render('(web)/hostels/hostels');
    }

    public function hostelDetail($slug)
    {
        $hostel = Hostel::where('slug', $slug)->firstOrFail();

        return Inertia::render('(web)/hostel/hostel', [
            'hostel' => [
                'id' => $hostel->id,
                'title' => $hostel->title,
                'slug' => $hostel->slug,
                'description' => $hostel->description,
                'thumbnail' => $hostel->thumbnail,
                'images' => json_decode($hostel->images_array),
                'location' => [
                    'address_line1' => $hostel->address_line1,
                    'address_line2' => $hostel->address_line2,
                    'city' => $hostel->city,
                    'state' => $hostel->state,
                    'country' => $hostel->country,
                    'pincode' => $hostel->pincode,
                    'full_address' => $hostel->full_address,
                ],
                'pricing' => [
                    'monthly' => [
                        'normal' => $hostel->rent_monthly,
                        'ac' => $hostel->rent_monthly_ac,
                    ],
                    'quarterly' => [
                        'normal' => $hostel->rent_quarterly,
                        'ac' => $hostel->rent_quarterly_ac,
                    ],
                    'yearly' => [
                        'normal' => $hostel->rent_yearly,
                        'ac' => $hostel->rent_yearly_ac,
                    ],
                ],
                'amenities' => json_decode($hostel->amenities_array),
                'room_types' => json_decode($hostel->room_types_array),
            ]
        ]);
    }

    public function facilities()
    {
        return Inertia::render('(web)/facilities/facilities');
    }

    public function facilityDetail($slug)
    {
        $facility = Facility::where('slug', $slug)->firstOrFail();

        return Inertia::render('(web)/facility/facility', [
            'facility' => [
                'id' => $facility->id,
                'title' => $facility->title,
                'headline' => $facility->headline,
                'description' => $facility->description,
                'thumbnail' => $facility->thumbnail,
                'image' => $facility->image,
                'icon' => $facility->icon,
            ]
        ]);
    }

    public function blogs()
    {
        return Inertia::render('(web)/blogs/blogs');
    }

    public function blog()
    {
        return Inertia::render('(web)/blog/blog');
    }

    public function blogPost($slug)
    {
        $post = BlogPost::where('slug', $slug)->where('published', true)->firstOrFail();

        return Inertia::render('Blog/Detail', [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'content' => $post->content,
                'thumbnail' => $post->thumbnail,
                'published' => $post->author,
                'created_at' => $post->created_at->format('F j, Y'),
            ]
        ]);
    }

    public function gallery()
    {
        $galleryImages = Gallery::latest()->paginate(12);
        return Inertia::render('(web)/gallery/gallery', [
            "galleryImages" => $galleryImages,
        ]);
    }

    public function contact()
    {
        return Inertia::render('(web)/contact/contact');
    }

    public function privacy()
    {
        return Inertia::render('(web)/privacy/privacy');
    }

    public function terms()
    {
        return Inertia::render('(web)/terms/terms');
    }
}
