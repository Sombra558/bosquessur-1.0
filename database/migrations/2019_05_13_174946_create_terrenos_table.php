<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTerrenosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('terrenos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('terreno',200);
            $table->text('descripcion',1000);
            $table->string('precio', 162);
            $table->text('superficie',150);
            $table->text('utm',80);
            $table->text('latitud',80);
            $table->text('longitud',80);
            $table->string('clasificacion',60);
            $table->string('zona');
            $table->string('provincia');
            $table->string('comuna');
            $table->string('imaprimera', 800);
            $table->string('imasegunda', 800);
            $table->string('imatercera', 800);
            $table->string('mapa', 800);
            $table->boolean('estado')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('terrenos');
    }
}
