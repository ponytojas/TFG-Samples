<template>
  <nav
    class="md:relative bg-white md:bg-transparent shadow-md md:shadow-none z-50 mt-1 p-6 w-full"
  >
    <div class="flex items-center justify-between">
      <div class="flex flex-row cursor-pointer">
        <img class="w-10 h-10 my-auto" src="../assets/images/bank-logo.png" />
        <span class="ml-2 text-xl pt-1 my-auto">Banco importante </span>
      </div>
      <div class="md:hidden">
        <button @click="showSideMenu = !showSideMenu">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8 fill-current text-black"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-xl">
          <li>
            <a to="#" class="cursor-pointer">Contacto</a>
          </li>
          <li>
            <a href="#" class="cursor-pointer">Otros servicios</a>
          </li>
        </ul>
      </div>
      <transition name="slide-fade-background">
        <div class="z-10 fixed inset-0 transition-opacity" v-if="showSideMenu">
          <div tabindex="0" class="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </transition>
      <transition name="slide-fade">
        <aside
          v-if="showSideMenu"
          class="p-5 open-transition transform top-0 rounded-bl-lg shadow right-0 w-auto bg-white fixed pb-20 pl-12 h-auto overflow-auto ease-in-out transition-all duration-500 z-30 translate-x-0"
        >
          <div class="close mb-10">
            <button
              class="absolute top-0 right-0 mt-7 mr-7"
              @click="showSideMenu = !showSideMenu"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <span class="flex w-full items-center p-4 border-b">
            <span class="text-gray-600 text-3xl text-center">
              Banco importante</span
            ></span
          >
          <ul class="divide-y text-right">
            <li>
              <a herf="#" class="my-4 text-xl inline-block cursor-pointer">Contacto</a>
            </li>
            <li>
              <a href="#" class="my-4 text-xl inline-block cursor-pointer">Otros servicios</a>
            </li>
            <li></li>
          </ul>
        </aside>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showSideMenu: false,
    };
  },
};
</script>