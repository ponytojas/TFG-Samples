<template>
  <div class="flex flex-col mt-5">
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Jerarquía</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-center text-gray-500 italic w-full">
          "El espacio permite generar jerarquía en los elementos"
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="flex flex-col w-full md:w-6/12 content-center align-middle items-center justify-center md:mr-10"
        >
          <div
            class="w-full mb-4 text-white rounded border card"
            style="height: 34rem"
          >
            <div class="p-6">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col h-9 w-9 rounded bg-red-200"></div>
                <div class="flex flex-col h-9 w-9 bg-red-200 justify-evenly">
                  <div class="flex flex-row w-full h-2 bg-white"></div>
                  <div class="flex flex-row w-full h-2 bg-white"></div>
                </div>
              </div>
              <div
                class="flex flex-row mt-4 w-11/12 bg-red-200 h-6 rounded"
              ></div>
              <div
                class="flex flex-row mt-2 w-8/12 bg-red-200 h-5 rounded-lg"
              ></div>
              <div
                class="flex flex-row mt-2 w-6/12 bg-red-200 h-8 rounded-2xl"
              ></div>
              <div
                class="flex flex-row mt-2 w-full bg-red-200 h-44 rounded"
              ></div>
              <div class="flex flex-row mt-3">
                <div
                  class="flex flex-col flex-1 mr-3 h-20 rounded bg-red-200"
                ></div>
                <div
                  class="flex flex-col flex-1 ml-3 h-20 rounded bg-red-200"
                ></div>
              </div>
              <div class="flex flex-row mt-2">
                <div
                  class="flex flex-col flex-1 mr-3 h-20 rounded bg-red-200"
                ></div>
                <div
                  class="flex flex-col flex-1 ml-3 h-20 rounded bg-red-200"
                ></div>
              </div>
            </div>
          </div>
          <p
            class="mt-0 px-1 lg:px-0 lg:mt-2 text-lg font-light break-normal mb-10 lg:mb-0 text-center lg:text-left"
          >
            Si no existen espacios, el contenido se ve saturado
          </p>
        </div>
        <div
          class="flex flex-col flex-1 content-center align-middle items-center justify-center"
        >
          <div
            class="w-full mb-4 text-white rounded border card"
            style="height: 34rem"
          >
            <div class="p-6">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col h-9 w-9 rounded bg-green-200"></div>
                <div class="flex flex-col h-9 w-9 bg-green-200 justify-evenly">
                  <div class="flex flex-row w-full h-2 bg-white"></div>
                  <div class="flex flex-row w-full h-2 bg-white"></div>
                </div>
              </div>
              <div
                class="flex flex-row mt-10 w-11/12 bg-green-200 h-6 rounded"
              ></div>
              <div
                class="flex flex-row mt-3 w-8/12 bg-green-200 h-5 rounded-lg"
              ></div>
              <div
                class="flex flex-row mt-2 w-6/12 bg-green-200 h-8 rounded-2xl"
              ></div>
              <div
                class="flex flex-row mt-9 w-full bg-green-200 h-44 rounded"
              ></div>
              <div class="flex flex-row mt-6">
                <div
                  class="flex flex-col flex-1 mr-3 h-20 rounded bg-green-200"
                ></div>
                <div
                  class="flex flex-col flex-1 ml-3 h-20 rounded bg-green-200"
                ></div>
              </div>
            </div>
          </div>
          <p
            class="mt-0 px-1 lg:px-0 lg:mt-2 text-lg font-light break-normal mb-4 lg:mb-0 text-center lg:text-left"
          >
            Los elementos que tienen más espacio algreenedor obtienen la
            atención más rápido
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Clarificar</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-center text-gray-500 italic w-full">
          "Añadir espacios permite que el contenido sea más claro y fácil de
          comprender"
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="flex flex-col w-full md:w-6/12 content-center align-middle items-center justify-center md:mr-10"
        >
          <div
            class="w-full mb-4 text-white rounded border card"
            style="height: 48rem"
          >
            <div class="p-6">
              <div v-for="index in 4" :key="index">
                <div
                  class="flex flex-row w-full bg-red-200 h-32 rounded-lg"
                ></div>
                <div class="flex flex-row">
                  <div class="flex flex-col">
                    <span class="material-icons text-red-200 text-5xl"
                      >account_circle</span
                    >
                  </div>
                  <div class="flex flex-col flex-1">
                    <div
                      class="flex flex-row w-10/12 ml-2 mt-4 bg-red-200 h-2 rounded-lg"
                    ></div>
                    <div
                      class="flex flex-row w-7/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            class="mt-0 px-1 lg:px-0 lg:mt-2 text-lg font-light break-normal mb-10 lg:mb-0 text-center lg:text-left"
          >
            Al no haber espacio entre elementos es complicado saber a que
            pertenece cada uno.
          </p>
        </div>
        <div
          class="flex flex-col flex-1 content-center align-middle items-center justify-center"
        >
          <div
            class="w-full mb-4 text-white rounded border card"
            style="height: 48rem"
          >
            <div class="p-6">
              <div v-for="index in 4" :key="index">
                <div
                  class="flex flex-row w-full bg-green-200 h-28 rounded-lg"
                  :class="index > 1 ? 'mt-7' : 'mt-0'"
                ></div>
                <div class="flex flex-row">
                  <div class="flex flex-col">
                    <span class="material-icons text-green-200 text-5xl"
                      >account_circle</span
                    >
                  </div>
                  <div class="flex flex-col flex-1">
                    <div
                      class="flex flex-row w-10/12 ml-2 mt-4 bg-green-200 h-2 rounded-lg"
                    ></div>
                    <div
                      class="flex flex-row w-7/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            class="mt-0 px-1 lg:px-0 lg:mt-2 text-lg font-light break-normal mb-4 lg:mb-0 text-center lg:text-left"
          >
            Al estar separados, es fácil identificar cual pertenece a cada uno.
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Legibilidad</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-center text-gray-500 italic w-full">
          "Al presentar texto en el contenido, el espacio nos ayuda a que sea
          más sencillo de leer"
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="flex flex-col w-full md:w-6/12 content-center align-middle items-center justify-center md:mr-10"
        >
          <div
            class="w-full mb-4 text-white rounded border card"
            style="height: 34rem"
          >
            <div class="p-6">
              <div class="flex flex-row">
                <div class="flex flex-col">
                  <span class="material-icons text-red-200 text-5xl"
                    >account_circle</span
                  >
                </div>
                <div class="flex flex-col flex-1">
                  <div
                    class="flex flex-row w-4/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                  ></div>
                  <div
                    class="flex flex-row w-7/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                  ></div>
                </div>
              </div>
              <div
                class="flex flex-row w-full mt-3 mb-3 bg-red-200 h-40 rounded-lg"
              ></div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-8/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-9/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-6/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-11/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-11/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-9/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-4/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-8/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-9/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-11/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-8/12 ml-2 mt-2 bg-red-200 h-2 rounded-lg"
                ></div>
              </div>
            </div>
          </div>
          <p
            class="mt-0 px-1 lg:px-0 lg:mt-2 text-lg font-light break-normal mb-10 lg:mb-0 text-center lg:text-left"
          >
            Si no existe espacio, es mucho más complejo seguir el hilo y
            encontrar diferentes partes del contenido.
          </p>
        </div>
        <div
          class="flex flex-col flex-1 content-center align-middle items-center justify-center"
        >
          <div
            class="w-full mb-4 text-white rounded border card"
            style="height: 34rem"
          >
            <div class="p-6">
              <div class="flex flex-row">
                <div class="flex flex-col">
                  <span class="material-icons text-green-200 text-5xl"
                    >account_circle</span
                  >
                </div>
                <div class="flex flex-col flex-1">
                  <div
                    class="flex flex-row w-4/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                  ></div>
                  <div
                    class="flex flex-row w-7/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                  ></div>
                </div>
              </div>
              <div
                class="flex flex-row w-full mt-3 mb-3 bg-green-200 h-40 rounded-lg"
              ></div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-8/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-9/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-6/12 ml-2 mt-2 mb-4 bg-green-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-11/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-11/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-9/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-4/12 mb-4 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-8/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-9/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
              </div>
              <div class="flex flex-col flex-1">
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-11/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
                <div
                  class="flex flex-row w-10/12 ml-2 mt-2 bg-green-200 h-2 rounded-lg"
                ></div>
              </div>
            </div>
          </div>
          <p
            class="mt-0 px-1 lg:px-0 lg:mt-2 text-lg font-light break-normal mb-4 lg:mb-0 text-center lg:text-left"
          >
            El uso del espacio permite agrupar contenido por secciones y generar
            una jerarquía completa del texto.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-shadow {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card {
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}


  .material-icons{
    font-size: 3em !important;   
  }
</style>