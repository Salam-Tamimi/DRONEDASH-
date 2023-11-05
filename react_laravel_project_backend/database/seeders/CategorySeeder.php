<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            [
                'name' => 'Quadcopters',
                'image' => 'https://stormsend1.djicdn.com/stormsend/uploads/a9669f9875e59818f5a2c5987e57c457.png',
                'description' => 'Quadcopters are one of the most common and popular types of consumer drones. They have four rotors, two on each side, which provide stability and maneuverability. Quadcopters are used for various purposes, including aerial photography, recreational flying, and even racing.',
            ],
            [
                'name' => 'Fixed-Wing Drones',
                'image' => 'https://dji-official-fe.djicdn.com/cms/uploads/a656cc79725b55d02616072360469ffd.png',
                'description' => 'Fixed-wing drones have a design similar to traditional airplanes. They have wings and a single fixed wing, as the name suggests. These drones are known for their efficiency in covering long distances and are often used in applications like aerial mapping, surveying, and agriculture.',
            ],
            [
                'name' => 'Hexacopters',
                'image' => 'https://dji-official-fe.djicdn.com/cms/uploads/7e215dd6f92a6178809776413bb3a476.png',
                'description' => ' Hexacopters have six rotors, and octocopters have eight rotors. These multi-rotor drones are capable of carrying heavier payloads and are used in professional applications like cinematography, industrial inspections, and search and rescue operations. The extra rotors provide redundancy and stability.',
            ],
        ];

        foreach ($categories as $category) {
            DB::table('category')->insert($category);
        }
    }
}
