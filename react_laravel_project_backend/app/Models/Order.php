<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'order';
    public $timestamps = false;
    protected $fillable = [
        'date',
        'time',
        'location',
        'notes',
        'totalPrice',

        'editing',
        'item_id',
        'user_id',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }





    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
