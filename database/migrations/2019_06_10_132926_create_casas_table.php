<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCasasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('casas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('casa',200);
            $table->integer('habitaciones');
            $table->integer('banos');
            $table->text('descripcion',1000);
            $table->string('precio', 162);
            $table->text('superficie',250);
            $table->text('utm',80);
            $table->text('latitud',80);
            $table->text('longitud',80);
            $table->string('zona',80);
            $table->string('provincia',80);
            $table->string('comuna',80);
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
        Schema::dropIfExists('casas');
    }
}
