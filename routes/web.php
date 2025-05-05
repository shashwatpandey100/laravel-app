<?php

use App\Http\Controllers\BookingRequestController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/hostels', [PageController::class, 'hostels'])->name('hostels');
Route::get('/hostel/{slug}', [PageController::class, 'hostelDetail'])->name('hostel.detail');
Route::get('/facilities', [PageController::class, 'facilities'])->name('facilities');
Route::get('/facility/{slug}', [PageController::class, 'facilityDetail'])->name('facility.detail');
Route::get('/blogs', [PageController::class, 'blogs'])->name('blogs');
Route::get('/blog/{slug}', [PageController::class, 'blogPost'])->name('blog.post');
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/privacy-policy', [PageController::class, 'privacy'])->name('privacy');
Route::get('/terms-conditions', [PageController::class, 'terms'])->name('terms');

Route::post('/booking-requests', [BookingRequestController::class, 'store'])->name('booking-requests.store');
Route::post('/subscription', [SubscriptionController::class, 'store'])->name('subscription.store');
Route::post('/lead', [LeadController::class, 'store'])->name('lead.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('(admin)/home');
    })->name('dashboard');

    Route::prefix('booking-requests')->group(function () {
        Route::delete('/{bookingRequest}', [BookingRequestController::class, 'destroy'])->name('booking-requests.destroy');
        Route::post('/{bookingRequest}/update-status', [BookingRequestController::class, 'updateStatus'])->name('booking-requests.update-status');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
