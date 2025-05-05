<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void {}

    public function boot(): void
    { {
            if (env('APP_ENV') == 'production') {
                $this->app['request']->server->set('HTTPS', true);
            }
        }
    }
}
