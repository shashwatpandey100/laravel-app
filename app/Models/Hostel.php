<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Hostel extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'thumbnail',
        'images',
        'address_line1',
        'address_line2',
        'city',
        'state',
        'country',
        'pincode',
        'rent_monthly',
        'rent_quarterly',
        'rent_yearly',
        'rent_monthly_ac',
        'rent_quarterly_ac',
        'rent_yearly_ac',
        'amenities',
        'room_types',
    ];

    protected $casts = [
        'images' => 'json',
        'amenities' => 'json',
        'room_types' => 'json',
        'rent_monthly' => 'decimal:2',
        'rent_quarterly' => 'decimal:2',
        'rent_yearly' => 'decimal:2',
        'rent_monthly_ac' => 'decimal:2',
        'rent_quarterly_ac' => 'decimal:2',
        'rent_yearly_ac' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($hostel) {
            if (empty($hostel->slug)) {
                $hostel->slug = Str::slug($hostel->title);
            }
        });

        static::updating(function ($hostel) {
            if ($hostel->isDirty('title') && !$hostel->isDirty('slug')) {
                $hostel->slug = Str::slug($hostel->title);
            }
        });
    }

    public function getFullAddressAttribute()
    {
        $address = $this->address_line1;

        if ($this->address_line2) {
            $address .= ', ' . $this->address_line2;
        }

        return $address . ', ' . $this->city . ', ' . $this->state . ', ' . $this->country . ' - ' . $this->pincode;
    }

    public function bookingRequests()
    {
        return $this->hasMany(BookingRequest::class);
    }

    public function scopeSearch($query, $search)
    {
        if ($search) {
            return $query->where(function ($query) use ($search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%")
                    ->orWhere('city', 'like', "%{$search}%")
                    ->orWhere('state', 'like', "%{$search}%");
            });
        }

        return $query;
    }

    public function getAmenitiesArrayAttribute()
    {
        return $this->amenities ? json_decode($this->attributes['amenities'], true) : [];
    }

    public function getRoomTypesArrayAttribute()
    {
        return $this->room_types ? json_decode($this->attributes['room_types'], true) : [];
    }

    public function getImagesArrayAttribute()
    {
        return $this->images ? json_decode($this->attributes['images'], true) : [];
    }
}
