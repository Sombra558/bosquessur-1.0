<?php

use Illuminate\Database\Seeder;

class ComunasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comunas')->insert([
            'comuna' => 'Comuna de Iquique',
            'provincia_id' => 1,
        ]);
        DB::table('comunas')->insert([
            'comuna' => 'Comuna de Alto Hospicio',
            'provincia_id' => 1,
        ]);
        DB::table('comunas')->insert([
            'comuna' => 'Comuna de Pozo Almonte',
            'provincia_id' => 2,
        ]);
        DB::table('comunas')->insert([
            'comuna' => 'Comuna de Camiña',
            'provincia_id' => 2,
        ]);
        DB::table('comunas')->insert([
            'comuna' => 'Comuna de Colchane',
            'provincia_id' => 2,
        ]);
        DB::table('comunas')->insert([
            'comuna' => 'Comuna de Huara',
            'provincia_id' => 2,
        ]);
        DB::table('comunas')->insert([
            'comuna' => 'Comuna de Pica',
            'provincia_id' => 2,
        ]);

      
    }
}
