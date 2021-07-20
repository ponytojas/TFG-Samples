<template>
  <transition name="fade">
    <div class="modal-mask" v-if="show">
      <div class="modal-wrapper" @click="$emit('close')">
        <div
          class="modal-container rounded-md bg-gray-600 text-white z-50"
          :class="isBigShadow ? 'big-shadow' : 'low-shadow'"
        >
          <div class="modal-header mb-10" @click="$emit('close')">
            <span
              @click="$emit('close')"
              class="
                material-icons
                text-5xl
                float-right
                text-yellow-500
                cursor-pointer
              "
              >close_fullscreen</span
            >
          </div>

          <div class="modal-body w-full px-3">
            <span class="text-xl"
              >Este modal es solo un ejemplo de como las sombras sirven para
              identificar elementos que se encuentran en primer plano</span
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: Boolean,
    isBigShadow: Boolean,
  },
};
</script>


<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: table;
  transition: opacity 0.8s ease;
}

.low-shadow {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.big-shadow {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 50px 40px rgba(0, 0, 0, 0.42);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>