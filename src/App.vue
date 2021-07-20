<template>
  <div
    id="nav"
    class="
      flex flex-row
      justify-evenly
      mt-4
      px-6
      w-full
      flex-wrap
      overflow-x-hidden
    "
  >
    <router-link class="text-lg mx-2" to="/buttons">Botones</router-link>
    <span class="mint font-semibold">|</span>
    <router-link class="text-lg mx-2" to="/sections">Secciones</router-link>
    <span class="coral font-semibold">|</span>
    <router-link class="text-lg mx-2" to="/spaces">Espacios</router-link>
    <span class="yellow font-semibold">|</span>
    <router-link class="text-lg mx-2" to="/hierarchy">Jerarquía</router-link>
    <span class="tango font-semibold">|</span>
    <router-link class="text-lg mx-2" to="/relevance">Relevancia</router-link>
    <span class="lavander font-semibold">|</span>
    <router-link class="text-lg mx-2" to="/shadows">Sombras</router-link>
    <span class="marine font-semibold">|</span>
    <router-link class="text-lg mx-2" to="/colors">Colores</router-link>
    <span class="lime font-semibold">|</span>
    <router-link class="text-lg mx-2" to="/text">Texto</router-link>
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

.mint {
  color: #90d8cc;
}

.paster-green {
  color: #6ed477;
}

.coral {
  color: #ff6d70;
}

.yellow {
  color: #ffdb30;
}

.tango {
  color: #f79f77;
}

.lavander {
  color: #e4d0ff;
}

.marine {
  color: #1b97ad;
}

.lime {
  color: #A5D620;
}
</style>