<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'thumbnail',
        'published',
    ];

    protected $casts = [
        'published' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($blogPost) {
            if (empty($blogPost->slug)) {
                $blogPost->slug = Str::slug($blogPost->title);
            }
        });

        static::updating(function ($blogPost) {
            if ($blogPost->isDirty('title') && !$blogPost->isDirty('slug')) {
                $blogPost->slug = Str::slug($blogPost->title);
            }
        });
    }

    public function scopeSearch($query, $search)
    {
        if ($search) {
            return $query->where(function ($query) use ($search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('content', 'like', "%{$search}%");
            });
        }

        return $query;
    }

    public function getThumbnailUrlAttribute()
    {
        if (!$this->thumbnail) {
            return null;
        }

        if (filter_var($this->thumbnail, FILTER_VALIDATE_URL)) {
            return $this->thumbnail;
        }

        return asset('storage/' . $this->thumbnail);
    }

    public function getExcerpt($words = 50)
    {
        return Str::words(strip_tags($this->content), $words);
    }

    public function getPublicationDate($format = 'F j, Y')
    {
        return $this->created_at->format($format);
    }

    public function getReadingTimeAttribute()
    {
        // Average reading speed = ~200 words per minute
        $wordCount = str_word_count(strip_tags($this->content));
        $minutes = ceil($wordCount / 200);

        return max(1, $minutes);
    }
}
