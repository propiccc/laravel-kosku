<?php

namespace App\Jobs;

use App\Models\Property;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class ClearOverdueRentals implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
    // Mendapatkan semua properti dengan tanggal sewa yang sudah lewat
    $overdueProperties = Property::whereDate('waktu_sewa', '<',  now()->format('Y-m-d'))->get();
    

    // Mengubah penyewa_id menjadi null pada properti yang sudah lewat
    foreach ($overdueProperties as $property) {
        $property->update(['penyewa_id' => null, 'waktu_sewa' => null]);
    }
    }
}
