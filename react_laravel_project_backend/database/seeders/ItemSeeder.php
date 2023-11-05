<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    public function run()
    {
        $items = [
            [
                'name' => 'Commercial',
                'price' => '100',
                'image' => 'drone.png',
                'description' => 'Capture stunning aerial views and dynamic perspectives with commercial drone photography, enhancing your marketing materials and showcasing your business from above.',
                'category_id' => 1,
            ],
            [
                'name' => 'Events',
                'price' => '120',
                'image' => 'https://dronesurveyservices.com/wp-content/uploads/2022/10/Drone-wedding-photography-10-min.png.png',
                'description' => 'Capturing breathtaking aerial views, drone-captured events offer a unique and cinematic perspective, enhancing the visual storytelling of any occasion.',
                'category_id' => 1,
            ],
            [
                'name' => 'Buisness',
                'price' => '150',
                'image' => 'https://britishschoolofaviation.com/wp-content/uploads/2023/01/BSA-Feature.png',
                'description' => 'Boost your business with aerial insights captured by drones. Gain a competitive edge and make data-driven decisions from above.',
                'category_id' => 1,
            ],
            [
                'name' => 'Commercial',
                'price' =>  '120',
                'image' => 'drone.png',
                'description' => 'Capture stunning aerial views and dynamic perspectives with commercial drone photography, enhancing your marketing materials and showcasing your business from above.',
                'category_id' => 2,
            ],
            [
                'name' => 'Events',
                'price' =>  '160',
                'image' => 'https://dronesurveyservices.com/wp-content/uploads/2022/10/Drone-wedding-photography-10-min.png.png',
                'description' => 'Capturing breathtaking aerial views, drone-captured events offer a unique and cinematic perspective, enhancing the visual storytelling of any occasion.',
                'category_id' => 2,
            ],
            [
                'name' => 'Buisness',
                'price' =>  '200',
                'image' => 'https://britishschoolofaviation.com/wp-content/uploads/2023/01/BSA-Feature.png',
                'description' => 'Boost your business with aerial insights captured by drones. Gain a competitive edge and make data-driven decisions from above.',
                'category_id' => 2,
            ],
            [
                'name' => 'Commercial',
                'price' =>  '140',
                'image' => 'drone.png',
                'description' => 'Capture stunning aerial views and dynamic perspectives with commercial drone photography, enhancing your marketing materials and showcasing your business from above.',
                'category_id' => 3,
            ],
            [
                'name' => 'Events',
                'price' => '180',
                'image' => 'https://dronesurveyservices.com/wp-content/uploads/2022/10/Drone-wedding-photography-10-min.png.png',
                'description' => 'Capturing breathtaking aerial views, drone-captured events offer a unique and cinematic perspective, enhancing the visual storytelling of any occasion.',
                'category_id' => 3,
            ],
            [
                'name' => 'Buisness',
                'price' => '250',
                'image' => 'https://britishschoolofaviation.com/wp-content/uploads/2023/01/BSA-Feature.png',
                'description' => 'Boost your business with aerial insights captured by drones. Gain a competitive edge and make data-driven decisions from above.',
                'category_id' => 3,
            ],
        ];

        foreach ($items as $item) {
            DB::table('item')->insert($item);
        }
    }
}
