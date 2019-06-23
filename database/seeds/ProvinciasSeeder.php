<?php
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinciasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('provincias')->insert([
            'provincia' => 'Iquique',
            'region_id' => 1,
        ]);
        DB::table('provincias')->insert([
            'provincia' => 'Tamarugal',
            'region_id' => 1,
        ]);
    }
}
