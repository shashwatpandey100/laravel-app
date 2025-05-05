<?php

namespace App\Http\Controllers;

use App\Models\BookingRequest;
use App\Models\Hostel;
use Illuminate\Http\Request;

class BookingRequestController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'hostel_id' => 'required|exists:hostels,id',
            'phone' => 'required|string|max:15',
            'room_type' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'nullable|string',
        ]);

        BookingRequest::create($validated);

        return redirect()->back()->with('toast', [
            'type' => 'success',
            'message' => 'Booking request created successfully.',
        ]);
    }

    public function destroy(BookingRequest $bookingRequest)
    {
        $bookingRequest->delete();

        return redirect()->back()->with('success', 'Booking request deleted successfully.');
    }

    public function updateStatus(BookingRequest $bookingRequest, Request $request)
    {
        $validated = $request->validate([
            'status' => 'required|in:new,processed,confirmed,cancelled',
        ]);

        $bookingRequest->status = $validated['status'];
        $bookingRequest->save();

        return redirect()->back()->with('success', 'Booking request status updated successfully.');
    }
}
