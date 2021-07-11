<template>
  <transition name="fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container rounded-md shadow-lg">
          <div class="modal-header">
            <span class="text-3xl">¿Desea realizar el borrado?</span>
          </div>

          <div class="modal-body">
            <span class="text-xl"
              >Esta acción no se puede revertir y se perderán todos los datos
              asociados al usuario con identificador:
              <span class="italic font-thin">T-800</span></span
            >
          </div>

          <div class="modal-footer flex flex-row w-full justify-around">
            <button
              class="px-4 py-2 rounded-md"
              :class="isBest ? 'deleteBest' : 'deleteWorst'"
              @click="$emit('close')"
            >
              Borrar
            </button>
            <button
              class="px-4 py-2 rounded-md"
              :class="isBest ? 'cancelBest' : 'cancelWorst'"
              @click="$emit('close')"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["isBest"],
};
</script>

<style scoped>
.cancelBest {
  background-color: #6ed477;
  color: white;
}

.cancelWorst {
  background-color: #00cc44;
  color: white;
}

.deleteBest {
  color: #e20d36;
}

.deleteWorst {
  background-color: #ff0509;
  color: white;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.8s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>