<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'logo',
        'description',
        'social_links',
        'addresses',
        'phones',
        'emails',
    ];

    protected $casts = [
        'social_links' => 'json',
        'addresses' => 'json',
        'phones' => 'json',
        'emails' => 'json',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function getPrimaryAddressAttribute()
    {
        if (!$this->addresses) {
            return null;
        }

        $addresses = json_decode($this->attributes['addresses'], true);

        foreach ($addresses as $address) {
            if (isset($address['is_primary']) && $address['is_primary']) {
                return $address;
            }
        }

        return count($addresses) > 0 ? $addresses[0] : null;
    }

    public function getPrimaryPhoneAttribute()
    {
        if (!$this->phones) {
            return null;
        }

        $phones = json_decode($this->attributes['phones'], true);
        return count($phones) > 0 ? $phones[0] : null;
    }

    public function getPrimaryEmailAttribute()
    {
        if (!$this->emails) {
            return null;
        }

        $emails = json_decode($this->attributes['emails'], true);
        return count($emails) > 0 ? $emails[0] : null;
    }

    public function getSocialLink($platform)
    {
        if (!$this->social_links) {
            return null;
        }

        $links = json_decode($this->attributes['social_links'], true);
        return $links[$platform] ?? null;
    }

    public function facilities()
    {
        return $this->hasMany(Facility::class);
    }
}
