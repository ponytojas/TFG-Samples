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
        <span class="line-through title-gradient-text">(Des)</span>Activado
      </p>
      <div class="flex items-center justify-center w-full mb-24">
        <label for="toogleA" class="flex items-center cursor-pointer">
          <div class="relative">
            <input
              id="toogleA"
              type="checkbox"
              class="hidden"
              v-model="shadowsA"
            />
            <div
              class="
                toggle__line
                w-10
                h-4
                bg-gray-400
                rounded-full
                shadow-inner
              "
            ></div>
            <div
              class="
                toggle__dot
                absolute
                w-6
                h-6
                bg-gray-300
                rounded-full
                shadow
                inset-y-0
                left-0
              "
            ></div>
          </div>
          <div class="ml-3 text-gray-700 font-medium">Habilitar sombra</div>
        </label>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-1/3
            content-center
            items-center
            mx-auto
          "
        >
          <div
            class="
              px-4
              py-2
              bg-blue-400
              w-8/12
              sm:w-4/12
              md:w-6/12
              lg:w-10/12
              cursor-pointer
              text-white
              rounded
              hover:bg-blue-600
            "
          >
            <p class="text-center w-full">Comprar</p>
          </div>
          <p class="mt-6 text-lg font-light w-8/12 text-center">
            El elemento sin sombra puede generar confusión
          </p>
        </div>
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-1/3
            content-center
            items-center
            mx-auto
          "
        >
          <div
            class="
              px-4
              py-2
              bg-blue-400
              w-8/12
              sm:w-4/12
              md:w-6/12
              lg:w-10/12
              cursor-pointer
              text-white
              rounded
              hover:bg-blue-600
            "
            :class="{ 'shadow-xl': shadowsA }"
          >
            <p class="text-center w-full">Comprar</p>
          </div>
          <p class="mt-6 text-lg font-light w-8/12 text-center">
            La sombra facilita entender que se puede interactuar con el botón
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
        Referencia de posición
      </p>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-1/3
            content-center
            items-center
            mx-auto
          "
        >
          <div
            class="
              px-4
              py-2
              bg-blue-400
              w-8/12
              sm:w-4/12
              md:w-6/12
              lg:w-10/12
              cursor-pointer
              text-white
              rounded
              hover:bg-blue-600
            "
            @click="showModalLittleShadow = true"
          >
            <p class="text-center w-full">Poca sombra</p>
          </div>
          <p class="mt-6 text-lg font-light w-8/12 text-center">
            El elemento sin sombra puede generar confusión
          </p>
        </div>
        <Modal
          @close="showModalLittleShadow = false"
          :isBest="true"
          :show="showModalLittleShadow"
          :isBigShadow="false"
        >
        </Modal>
        <div
          class="
            flex flex-col
            w-full
            mb-10
            lg:mb-0
            lg:w-1/3
            content-center
            items-center
            mx-auto
          "
        >
          <div
            class="
              px-4
              py-2
              bg-blue-400
              w-8/12
              sm:w-4/12
              md:w-6/12
              lg:w-10/12
              cursor-pointer
              text-white
              rounded
              hover:bg-blue-600
            "
            @click="showModalBigShadow = true"

          >
            <p class="text-center w-full">Mucha Sombra</p>
          </div>
          <Modal
          @close="showModalBigShadow = false"
          :isBest="true"
          :show="showModalBigShadow"
          :isBigShadow="true"
        >
        </Modal>
          <p class="mt-6 text-lg font-light w-8/12 text-center">
            La sombra facilita entender que se puede interactuar con el botón
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/modalShadow.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      shadowsA: true,
      showModalLittleShadow: false,
      showModalBigShadow: false,
    };
  },
};
</script>

<style scoped>
.title-gradient-text {
  text-decoration: line-through;
  background: linear-gradient(to right, #90d8cc, #6ed477, #009688);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

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

