<template>
  <div class="flex flex-col mt-5">
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Texto</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-justify text-gray-500 italic w-full">
          "El texto que incluyen los botones creará seguridad en el usuario a la
          hora de buscarlos y encontrar la acción que realmente quieren
          realizar. Cuanta más información de la acción que realiza ofrezca el
          botón en su texto más sencillo será identificarlo en una lectura
          diagonal y rápida."
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-blue-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-blue-600"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            Fácilmente reconocible
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-blue-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-blue-600"
          >
            <p class="text-center w-full">¡Lo quiero!</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            Puede generar confusión
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-blue-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-blue-600"
          >
            <p class="text-center w-full">Este</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            Muy poco entendible
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Color</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-justify text-gray-500 italic w-full">
          "El uso del color es importante a la hora de indicar y crear un flujo
          de acciones para nuestros usuarios. Colores llamativos o que
          representen ideas y conceptos mentales nos ayudarán a que el usuario
          sea capaz de encontrar la acción que busca realizar"
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-green-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-green-600"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            El color verde marca el flujo normal de uso
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-yellow-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-yellow-500"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            Los amarillos muestran advertencia y pueden generar dudas en su uso
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-red-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-red-600"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            El color rojo representa acciones no habituales y nos genera dudas
            en la acción a realizar
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Forma</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-justify text-gray-500 italic w-full">
          "La forma del botón permitirá que sea mucho más fácil de encontrar al
          realizar lecturas y búsquedas rápidas. Cuanto menos se parezca nuestro
          botón a un botón más complejo será de encontrar. Esto puede ser
          aprovechado para esconder acciones no habituales o que rompan el flujo
          de uso y que requieran que los usuarios lean detenidamente unas
          instrucciones o realicen pasos previos"
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
       <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div class="px-4 py-2 bg-green-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded">
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            La forma completa de botón genera seguridad al buscar donde pulsar
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 cursor-pointer text-green-500 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 rounded border border-green-400"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            Al no tener relleno podemos generar duda a la hora de realiazar
            lecturas diagonales
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 cursor-pointer text-green-500 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 rounded"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            En este caso, no encontramos ninguna parte diferenciadora del botón
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Interacción</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-justify text-gray-500 italic w-full">
          "Cuando el usuario encuentre el botón que le permita realizar la
          acción que busca espera recibir feedback que le permita identificar
          que es pulsable o que puede interaccionar con ello."
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-green-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 text-white rounded hover:bg-green-600"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 text-center">
            Al pasar el ratón por encima el botón oscurece su color
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 text-green-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 rounded border border-green-400 hover:text-white hover:bg-green-400"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light text-center w-8/12">
            Al pasar el ratón por encima el botón se rellena con el color del
            borde y el texto pasa un color legible sobre ese color
          </p>
        </div>
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 bg-green-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light text-center w-8/12">
            Al pasar el ratón por encima el cursor cambia de forma.
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">Sombra</p>
      <div class="flex flex-row flex-wrap justify-evenly mt-6 md:mx-24">
        <p class="text-justify text-gray-500 italic w-full">
          "Podemos utilizar la sombra como otra forma de generar feedback para
          la interacción del usuario. Además, la sombra nos ayuda a crear
          jerarquía en los elementos y el contenido"
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly mt-12">
        <div
          class="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/3 content-center items-center mx-auto"
        >
          <div
            class="px-4 py-2 mx-auto bg-green-400 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded shadow-md hover:shadow-xl btn-shadow active:shadow-none"
          >
            <p class="text-center w-full">Añadir al carrito</p>
          </div>
          <p class="mt-2 text-lg font-light w-8/12 xl:w-full text-center">
            En este caso, la sombra inicial facilita identificar que el botón
            está activo. Por otro lado, al poner el cursor por encima, la sombra
            se incrementa. Por último, la sombra desaparece al pulsarse.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-shadow {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card {
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>