<template>
  <div class="flex flex-col mt-5 w-full">
    <div class="flex items-center justify-center w-full mb-24">
      <label for="toogleA" class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            id="toogleA"
            type="checkbox"
            class="hidden"
            v-model="activeSections"
          />
          <div
            class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
          ></div>
          <div
            class="toggle__dot absolute w-6 h-6 bg-gray-300 rounded-full shadow inset-y-0 left-0"
          ></div>
        </div>
        <div class="ml-3 text-gray-700 font-medium">Habilitar secciones</div>
      </label>
    </div>
    <div class="flex flex-col items-center mb-20">
      <div
        class="w-11/12 lg:w-8/12 h-auto rounded section-content border"
        :class="!activeSections ? '' : 'hidden'"
      >
        <div class="flex flex-col w-full h-full py-6 px-8">
          <p class="text-center text-5xl">
            <span class="text-yellow-500">G</span>olden
            <span class="text-yellow-500">R</span>etriever
          </p>
          <img
            class="h-60 w-80 self-center rounded mt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Golden_Retriever_with_tennis_ball.jpg"
          />

          <div class="flex flex-col h-full">
            <div class="flex flex-row">
              <p class="text-xl">Historia</p>
            </div>
            <div class="flex flex-row">
              La cruza original fue entre un perro perdiguero de color amarillo,
              Nous, y una perra Tweed Water spaniel, Belle.6​ La raza de tweed
              water spaniel está extinta, pero en aquel entonces era común en
              las áreas fronterizas. En 1868, esta cruza produjo una camada que
              incluía cuatro cachorros, los cuales se convirtieron en la base de
              un programa de mejoramiento genético que incluyó al setter
              irlandés, el bloodhound color arena, el perro de aguas de San Juan
              o Terranova menor, y dos retriever con pelaje rizado de color
              negro. Las líneas de sangre fueron endogámicas y también
              seleccionadas con exactitud por Marjoribanks apegado a su ideal de
              desarrollar el mejor perro de caza. Su visión incluía un perro más
              fuerte y poderoso que los retriever previos, uno que sería gentil
              y entrenable. Los perros pastores rusos no se mencionan en estos
              registros, ni ninguna otra raza de perros de trabajo. La
              ascendencia del Golden es toda de perros de caza, en línea con los
              objetivos de Marjoribanks. El Golden retriever es activo y
              poderoso y tiene una «boca blanda» para recuperar la presa
              mientras dura la cacería.
            </div>
          </div>
          <div class="flex flex-col h-full">
            <div class="flex flex-row">
              <p class="text-xl">Apariencia general</p>
            </div>
            <div class="flex flex-row">
              Como su nombre lo indica, su pelaje vienen en tonalidades de oro
              claro y oscuro. Su manto se compone de dos tipos de pelo: una capa
              exterior de pelaje que es resistente al agua y ligeramente
              ondulada, la cual pelecha en cantidades pequeñas a lo largo del
              año, y otra capa interna de subpelo suave que mantiene al perro
              fresco en verano y tibio en invierno. La capa interna, por lo
              general, es corta y pegada al vientre, muda en la primavera y el
              otoño. ​El manto nunca debe ser demasiado largo, ya que esto puede
              llegar a ser un perjuicio en el campo, sobre todo cuando el perro
              recupera una presa.
            </div>
          </div>
          <div class="flex flex-col h-full">
            <div class="flex flex-row">
              <p class="text-xl">Cuidado</p>
            </div>
            <div class="flex flex-row">
              Son perros activos, y requieren de una cantidad razonable de
              ejercicio cada día, aunque las necesidades de ejercicio pueden
              variar dependiendo del perro y su edad. Se le debe proporcionar
              tanto una adecuada socialización temprana, como una actividad
              física diaria para evitar conductas destructivas —como que al
              volver se encuentre que ha roto algo para descargar su
              frustración—. Tiene necesidad de estimulación mental, la cual se
              provee con entrenamiento y ejercicio, debido a que son buenos
              atletas y necesitan caminar todos los días, o se convertirán en
              perros inquietos y ansiosos. Hay que cepillar su pelaje al menos
              una vez a la semana —y más frecuentemente durante la muda— para
              eliminar todo el pelo muerto, haciendo que su manto esté mucho más
              vistoso y brillante. Se sabe que mudan profusamente el pelo dos
              veces al año. Graves pérdidas de pelo o parches pueden ser
              indicativos de estrés o de una enfermedad. También hay que limpiar
              sus orejas con regularidad, o de otro modo pueden contraer una
              infección de oído muy fácilmente.
            </div>
          </div>
          <div class="flex flex-col h-full">
            <div class="flex flex-row">
              <p class="text-xl">Temperamento</p>
            </div>
            <div class="flex flex-row">
              El temperamento del Golden Retriever es una característica
              distintiva de la raza, y se describe en la normativa racial como
              «amable, amigable y confiado,... ​Son buenas mascotas de familia,
              y particularmente pueden ser pacientes con los niños, sobre todo
              si son socializados y entrenados desde cachorros. ​No son perros
              de una sola persona, ya que por lo general serán igualmente
              amables con extraños que con aquellos que conocen. ​Su disposición
              confiada y amigable les hace ser malos perros guardianes.
              ​Cualquier forma de agresión no provocada u hostilidad hacia
              personas, perros y otros animales, ya sea en el ring o en la
              comunidad, se considera inaceptable y no está en consonancia con
              el carácter de la raza. Tampoco debe ser tímido o nervioso. Un
              Golden Retriever típico debe ser tranquilo, naturalmente
              inteligente y dócil. El perro también es reconocido por su
              inteligencia. La raza se catalogó en el cuarto lugar —de 131 razas
              analizadas— en la clasificación de Stanley Coren acerca de la
              inteligencia de los perros, después del border collie, caniche y
              pastor alemán, como uno de los perros más inteligentes
              clasificados según su capacidad de entrenamiento y obediencia al
              mando.
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-11/12 lg:w-8/12 rounded section-content border"
        :class="activeSections ? '' : 'hidden'"
      >
        <div class="flex flex-col w-full h-full py-6 px-8">
          <p class="text-center text-5xl">
            <span class="text-yellow-500">G</span>olden
            <span class="text-yellow-500">R</span>etriever
          </p>
          <img
            class="h-60 w-80 self-center rounded mt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Golden_Retriever_with_tennis_ball.jpg"
          />
          <div class="grid grid-rows-1 lg:grid-rows-2 grid-cols-2 lg:grid-cols-4 grid-flow-col gap-2 lg:gap-5 mt-8">
            <div class="col-span-1 row-span-4 lg:row-span-3 border-2 rounded p-4 bg-gray-100">
              <p class="text-xl lg:text-2xl 2xl:text-3xl">Historia</p>
              <hr class="mt-1 mb-2 border-green-500 w-10/12" />
              <p class="mt-2">
                La cruza original fue entre un perro perdiguero de color
                amarillo, Nous, y una perra Tweed Water spaniel, Belle. La raza
                de tweed water spaniel está extinta, pero en aquel entonces era
                común en las áreas fronterizas.
                <br />
                En 1868, esta cruza produjo una camada que incluía cuatro
                cachorros, los cuales se convirtieron en la base de un programa
                de mejoramiento genético que incluyó al setter irlandés, el
                bloodhound color arena, el perro de aguas de San Juan o
                Terranova menor, y dos retriever con pelaje rizado de color
                negro.
                <br />
                <br />
                Las líneas de sangre fueron endogámicas y también seleccionadas
                con exactitud por Marjoribanks apegado a su ideal de desarrollar
                el mejor perro de caza. Su visión incluía un perro más fuerte y
                poderoso que los retriever previos, uno que sería gentil y
                entrenable. Los perros pastores rusos no se mencionan en estos
                registros, ni ninguna otra raza de perros de trabajo. La
                ascendencia del Golden es toda de perros de caza, en línea con
                los objetivos de Marjoribanks.
                <br />
                <br />
                El Golden retriever es activo y poderoso y tiene una «boca
                blanda» para recuperar la presa mientras dura la cacería.
              </p>
            </div>

            <div class="col-span-2 border-2 rounded p-4">
              <p class="text-xl lg:text-2xl 2xl:text-3xl">Cuidado</p>
              <hr class="mt-1 mb-2 border-blue-400 w-10/12" />
              <p class="mt-2">
                Son perros activos, y requieren de una cantidad razonable de
                ejercicio cada día, aunque las necesidades de ejercicio pueden
                variar dependiendo del perro y su edad.
                <br />
                Se le debe proporcionar tanto una adecuada socialización
                temprana, como una actividad física diaria para evitar conductas
                destructivas —como que al volver se encuentre que ha roto algo
                para descargar su frustración—.
                <br />
                <br />
                Tiene necesidad de estimulación mental, la cual se provee con
                entrenamiento y ejercicio, debido a que son buenos atletas y
                necesitan caminar todos los días, o se convertirán en perros
                inquietos y ansiosos. Hay que cepillar su pelaje al menos una
                vez a la semana —y más frecuentemente durante la muda— para
                eliminar todo el pelo muerto, haciendo que su manto esté mucho
                más vistoso y brillante.
                <br />
                <br />
                Se sabe que mudan profusamente el pelo dos veces al año. Graves
                pérdidas de pelo o parches pueden ser indicativos de estrés o de
                una enfermedad. También hay que limpiar sus orejas con
                regularidad, o de otro modo pueden contraer una infección de
                oído muy fácilmente.
              </p>
            </div>
            <div class="col-span-2 row-span-1 border-2 rounded p-4">
              <p class="text-xl lg:text-2xl 2xl:text-3xl">Apariencia general</p>
              <hr class="mt-1 mb-2 border-pink-500 w-10/12" />
              <p class="mt-2">
                Como su nombre lo indica, su pelaje vienen en tonalidades de oro
                claro y oscuro. Su manto se compone de dos tipos de pelo: una
                capa exterior de pelaje que es resistente al agua y ligeramente
                ondulada, la cual pelecha en cantidades pequeñas a lo largo del
                año, y otra capa interna de subpelo suave que mantiene al perro
                fresco en verano y tibio en invierno.
                <br />
                <br />
                La capa interna, por lo general, es corta y pegada al vientre,
                muda en la primavera y el otoño. ​El manto nunca debe ser
                demasiado largo, ya que esto puede llegar a ser un perjuicio en
                el campo, sobre todo cuando el perro recupera una presa.
              </p>
            </div>
            <div class="row-span-2 col-span-2 lg:row-span-3 border-2 rounded p-4">
              <p class="text-xl lg:text-2xl 2xl:text-3xl">Temperamento</p>
              <hr class="mt-1 mb-2 border-yellow-400 w-10/12" />
              <p class="mt-2">
                El temperamento del Golden Retriever es una característica
                distintiva de la raza, y se describe en la normativa racial como
                «amable, amigable y confiado,... ​<br />
                Son buenas mascotas de familia, y particularmente pueden ser
                pacientes con los niños, sobre todo si son socializados y
                entrenados desde cachorros. ​
                <br />
                <br />
                No son perros de una sola persona, ya que por lo general serán
                igualmente amables con extraños que con aquellos que conocen.
                <br />
                ​Su disposición confiada y amigable les hace ser malos
                perros guardianes.
                <br />
                <br />
                ​Cualquier forma de agresión no provocada u hostilidad hacia
                personas, perros y otros animales, ya sea en el ring o en la
                comunidad, se considera inaceptable y no está en consonancia con
                el carácter de la raza. Tampoco debe ser tímido o nervioso. Un
                Golden Retriever típico debe ser tranquilo, naturalmente
                inteligente y dócil. 
                <br>
                <br>
                El perro también es reconocido por su
                inteligencia. La raza se catalogó en el cuarto lugar —de 131
                razas analizadas— en la clasificación de Stanley Coren acerca de
                la inteligencia de los perros, después del border collie,
                caniche y pastor alemán, como uno de los perros más inteligentes
                clasificados según su capacidad de entrenamiento y obediencia al
                mando.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSections: false,
    };
  },
};
</script>

<style scoped>
.section-content {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fafafa;
}

.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

input:checked ~ .toggle__line {
  background-color: #acd8be;
}
</style>

