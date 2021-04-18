<template>
  <div id="nav" class="flex flex-row justify-evenly mt-4 w-full flex-wrap">
    <router-link class="text-lg" to="/buttons">Botones</router-link>
    <router-link class="text-lg" to="/sections">Secciones</router-link>
    <router-link class="text-lg" to="/spaces">Espacios</router-link>
    <router-link class="text-lg" to="/hierarchy">Jerarquía</router-link>
    <router-link class="text-lg" to="/relevance">Relevancia</router-link>
  </div>
  <router-view />
</template>

<style>
.router-link-active {
  --tw-text-opacity: 1;
  color: rgba(16, 185, 129, var(--tw-text-opacity));
}
.card {
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>