<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('image')->default('assets/images/defaultImage.png');
            $table->bigInteger('phone')->nullable();
            $table->string('password');
        });
    }


    public function down()
    {
        Schema::dropIfExists('admins');
    }
};
