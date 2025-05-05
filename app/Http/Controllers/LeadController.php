<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string',
            'message' => 'nullable|string',
            'source_page' => 'nullable|string',
        ]);

        Lead::create($validated);

        return redirect()->back()->with('toast', [
            'type' => 'success',
            'message' => 'Lead created successfully.',
        ]);
    }
}
