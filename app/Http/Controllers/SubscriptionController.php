<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255',
        ]);

        Subscription::create($validated);

        return redirect()->back()->with('toast', [
            'type' => 'success',
            'message' => 'You have successfully subscribed to our newsletter.',
        ]);
    }
}
