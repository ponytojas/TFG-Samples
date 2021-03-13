<template>
  <div class="flex flex-col mt-5">
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

