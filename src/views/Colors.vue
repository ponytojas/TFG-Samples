<template>
  <div class="flex flex-col mt-5">
    <div
      class="
        z-20
        self-center
        justify-center
        align-middle
        items-center
        w-11/12
        2xl:w-6/12
        my-12
        py-8
        px-8
        md:py-12
        md:px-12
        card
        border-gray-200 border
        hover:border-0
        rounded-md
      "
    >
      <p class="text-center text-5xl font-extralight mb-10">
        Prioridad por colores
      </p>
      <div class="flex items-center justify-center w-full mb-24"></div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-2/4
            content-center
            items-center
            px-2
          "
        >
          <div class="flex flex-col rounded border w-full h-32">
            <div class="flex flex-row my-auto">
              <div class="flex flex-col w-full">
                <div
                  class="
                    px-4
                    py-2
                    mx-4
                    bg-red-400
                    cursor-pointer
                    text-white
                    rounded
                    hover:bg-red-600
                  "
                >
                  <p class="text-center w-full">Borrar</p>
                </div>
              </div>
              <div class="flex flex-col w-full">
                <div
                  class="
                    px-4
                    py-2
                    mx-4
                    bg-green-400
                    cursor-pointer
                    text-white
                    rounded
                    hover:bg-green-600
                  "
                >
                  <p class="text-center w-full">Cancelar</p>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-6 text-lg font-light w-8/12 text-center">
            El color no ayuda a diferenciar cual es la acción principal que se
            espera que el usuario realice.
          </p>
        </div>
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-2/4
            content-center
            items-center
            px-2
          "
        >
          <div class="flex flex-col rounded border w-full h-32">
            <div class="flex flex-row my-auto">
              <div class="flex flex-col w-full">
                <div
                  class="px-4 py-2 mx-4 text-red-400 rounded hover:text-red-600"
                >
                  <p class="text-center w-full cursor-pointer my-auto">
                    Borrar
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full">
                <div
                  class="
                    px-4
                    py-2
                    mx-4
                    bg-green-400
                    cursor-pointer
                    text-white
                    rounded
                    hover:bg-green-600
                  "
                >
                  <p class="text-center w-full">Cancelar</p>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-6 text-lg font-light w-8/12 text-center">
            El color ayuda a remarcar cual debería ser la acción a realizar
          </p>
        </div>
      </div>
    </div>

    <div
      class="
        z-20
        self-center
        justify-center
        align-middle
        items-center
        w-11/12
        2xl:w-6/12
        my-12
        py-8
        px-8
        md:py-12
        md:px-12
        card
        border-gray-200 border
        hover:border-0
        rounded-md
      "
    >
      <p class="text-center text-5xl font-extralight mb-10">
        Saturación de colores
      </p>
      <div class="flex items-center justify-center w-full mb-24"></div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-2/4
            content-center
            items-center
            px-2
          "
        >
          <div
            class="
              flex flex-col
              justify-center
              space-between
              rounded
              border
              w-full
              h-auto
              py-2
            "
          >
            <p class="text-center text-4xl my-2" style="color: #00ff00">
              Verde
            </p>

            <p class="text-center text-4xl my-2" style="color: #ff0000">Rojo</p>

            <p class="text-center text-4xl my-2" style="color: #0000ff">Azul</p>
          </div>
          <p class="mt-6 text-lg font-light w-full text-center">
            Los colores muy saturados generan una gran actividad fisicoquímica
            que puede entenderse como nerviosismo, intranquilidad, estrés, ...
          </p>
        </div>

        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-2/4
            content-center
            items-center
            px-2
          "
        >
          <div
            class="
              flex flex-col
              justify-center
              space-between
              rounded
              border
              w-full
              h-auto
              py-2
            "
          >
            <p class="text-center text-4xl my-2" style="color: #55cc00">
              Verde
            </p>

            <p class="text-center text-4xl my-2" style="color: #cc0055">Rojo</p>

            <p class="text-center text-4xl my-2" style="color: #0055cc">Azul</p>
          </div>
          <p class="mt-6 text-lg font-light w-full text-center">
            Los colores menos saturados por el contrario transmiten una mayor
            sensación de calma y relajación
          </p>
        </div>
      </div>
    </div>

    <div
      class="
        z-20
        self-center
        justify-center
        align-middle
        items-center
        w-11/12
        2xl:w-6/12
        my-12
        py-8
        px-8
        md:py-12
        md:px-12
        card
        border-gray-200
        border
        hover:border-0
        rounded-md
      "
    >
      <p class="text-center text-5xl font-extralight mb-10">Ejemplos modales</p>
      <div class="flex items-center justify-center w-full mb-24"></div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-2/4
            content-center
            items-center
            px-2
          "
        >
          <div
            class="
              flex flex-col
              justify-center
              space-between
              rounded
              w-full
              h-auto
              py-2
            "
          >
            <button
              class="
                py-2
                bg-red-400
                rounded
                w-8/12
                mx-auto
                text-white
                hover:bg-red-600
                shadow
              "
              id="show-modal"
              @click="showModalWorst = true"
            >
              Mensaje con colores mal establecidos
            </button>
            <Modal v-if="showModalWorst" @close="showModalWorst = false" :isBest="false">
            </Modal>
          </div>
          <p class="mt-6 text-lg font-light w-full text-center">
            Las acciones pueden confundirse facilmente si no se presta atención
            clara a lo que se está realizando.
          </p>
        </div>

        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-2/4
            content-center
            items-center
            px-2
          "
        >
          <div
            class="
              flex flex-col
              justify-center
              space-between
              rounded
              w-full
              h-auto
              py-2
            "
          >
            <button
              class="
                py-2
                bg-green-400
                rounded
                w-8/12
                mx-auto
                text-white
                hover:bg-green-600
                shadow
              "
              id="show-modal"
              @click="showModalBest = true"
            >
              Mensaje con colores bien establecidos
            </button>
            <Modal v-if="showModalBest" @close="showModalBest = false" :isBest="true">
            </Modal>
          </div>
          <p class="mt-6 text-lg font-light w-full text-center">
            Las acciones pueden confundirse facilmente si no se presta atención
            clara a lo que se está realizando.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModalBest: false,
      showModalWorst: false,
    };
  },
};
</script>

<style>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

