<template>
  <div class="flex flex-col">
      <div class="flex flex-row h-screen w-screen border-2">
          <Navbar />
      </div>
      <div class="flex flex-row h-screen w-screen bg-blue-200"></div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue"

export default {
    components:{
        Navbar
    }
}
</script>