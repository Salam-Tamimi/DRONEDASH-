<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $table = 'item';

    protected $fillable = [
        'name',
        'image',
        'description',
        'price',
        'category_id',
    ];
    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }



    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function order()
    {
        return $this->hasMany(Order::class);
    }
}
