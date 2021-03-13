<template>
  <div id="nav" class="flex flex-row justify-evenly mt-4 w-screen flex-wrap">
    <router-link class="text-lg" to="/buttons">Botones</router-link>
    <router-link class="text-lg" to="/sections">Secciones</router-link>
  </div>
  <router-view />
</template>

<style>
.router-link-active {
  --tw-text-opacity: 1;
  color: rgba(16, 185, 129, var(--tw-text-opacity));
}
</style>