<template>
  <div class="flex flex-col mt-5">
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">
        Tamaño y grosor de fuente
      </p>
      <div class="flex flex-col w-full flex-wrap items-center mt-12">
        <div class="flex flex-row mb-2">
          <span class="material-icons text-red-500 text-5xl"
            >sentiment_dissatisfied</span
          >
        </div>
        <div class="flex flex-row">
          <div
            class="mx-auto w-full md:w-8/12 h-auto md:h-56 border-2 rounded-lg flex  flex-col md:flex-row card"
          >
            <div class="flex flex-row md:flex-col w-full md:w-3/12 h-3/6 md:h-full bg-gray-300">
              <img
                class="h-full rounded-lg rounded-r-none w-full"
                src="../assets/images/flat.jpg"
              />
            </div>
            <div class="flex flex-col w-9/12 h-full">
              <div class="flex flex-row h-auto w-full">
                <div class="flex flex-row md:flex-col">
                  <div class="flex flex-col md:flex-row h-3/6 w-full">
                    <p class="pt-4 pl-4 text-2xl font-semibold">
                      Piso en Carrer de la Murta
                    </p>
                  </div>
                  <div class="flex flex-col md:flex-row h-3/6 w-full pl-4 mb-4 pt-2">
                    <p>
                      Piso recien reformado disponible para alquilar en una zona
                      envidiable de Valencia
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-row h-full w-full">
                <div class="flex flex-col w-full h-full">
                  <div class="flex flex-row w-full h-full">
                    <div class="flex flex-col w-6/12 h-full">
                      <div class="flex flex-row h-11/12 w-full">
                        <div class="pt-3 pl-3">
                          <p class="text-base">
                            <span class="text-lg">600€/mes</span>
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-row h-full w-full">
                        <div class="pt-3 pl-3">
                          <p class="text-sm">Estancia mínima de 6 meses</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col w-6/12 h-full">
                      <div
                        class="px-4 py-2 mx-auto my-auto bg-purple-600 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-purple-800"
                      >
                        <p class="text-center w-full">Contactar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row mt-10 mb-2">
          <span class="material-icons text-green-500 text-5xl"
            >sentiment_satisfied</span
          >
        </div>
        <div class="flex flex-row">
         <div
            class="mx-auto w-full md:w-8/12 h-auto md:h-56 border-2 rounded-lg flex  flex-col md:flex-row card"
          >
            <div class="flex flex-row md:flex-col w-full md:w-3/12 h-3/6 md:h-full bg-gray-300">
              <img
                class="h-full rounded-lg rounded-r-none w-full"
                src="../assets/images/flat.jpg"
              />
            </div>
            <div class="flex flex-col w-9/12 h-full">
              <div class="flex flex-row h-auto w-full">
                <div class="flex flex-col">
                  <div class="flex flex-row h-3/6 w-full">
                    <p class="pt-4 pl-4 text-2xl font-bold text-gray-700">
                      Piso en Carrer de la Murta
                    </p>
                  </div>
                  <div
                    class="flex flex-row font-light text-gray-900 h-3/6 w-full pl-4 mb-4 pt-2"
                  >
                    <p>
                      Piso recien reformado disponible para alquilar en una zona
                      envidiable de Valencia
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-row h-full w-full bg-gray-50">
                <div class="flex flex-col w-full h-full">
                  <div class="flex flex-row w-full h-full">
                    <div class="flex flex-col w-6/12 h-full">
                      <div class="flex flex-row h-11/12 w-full">
                        <div class="pt-3 pl-3">
                          <p class="text-base">
                            <span class="text-lg font-bold text-gray-800"
                              >600€<span
                                class="text-base font-light text-gray-600"
                                >/mes</span
                              ></span
                            >
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-row h-full w-full">
                        <div class="pt-3 pl-3">
                          <p class="text-sm text-gray-600 font-light">
                            Estancia mínima de 6 meses
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col w-6/12 h-full">
                      <div
                        class="px-4 py-2 mx-auto my-auto bg-purple-600 w-8/12 sm:w-4/12 md:w-6/12 lg:w-10/12 cursor-pointer text-white rounded hover:bg-purple-800"
                      >
                        <p class="text-center w-full">Contactar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row mt-16 px-4 md:px-20">
          <p class="text-gray-700 italic">
            "Los cambios en la fuente, tanto de grosor como de tamaño de letra
            permite desenfatizar cierta información y dar prioridad en la
            jerarquía de los elementos a determinadas partes de un texto. En
            este ejemplo, es más importante el precio y la zona que el tiempo de
            estancia mínimo, ya que son los factores donde más queremos llamar
            la atención del usuario."
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-8 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">
        Enfatizar <span class="text-2xl">desenfatizando</span>
      </p>
      <div class="flex flex-col w-full flex-wrap items-center mt-12">
        <div class="flex flex-row w-full">
          <span class="material-icons text-red-500 text-5xl mx-auto"
            >sentiment_dissatisfied</span
          >
        </div>
        <div class="flex flex-row w-full mt-2">
          <div class="w-full bg-gray-50 h-16 flex flex-row shadow border card">
            <div class="flex flex-col w-1/5 h-full">
              <img
                class="h-12 w-12 my-auto ml-6"
                src="../assets/images/logo.png"
              />
            </div>
            <div class="flex flex-col w-4/5 h-full">
              <div class="flex flex-row justify-evenly md:justify-around align-middle my-auto">
                <p class="font-semibold cursor-pointer">Localización</p>
                <p class="font-semibold text-yellow-500 cursor-pointer">
                  Contacto
                </p>
                <p class="hidden md:block font-semibold cursor-pointer">Proyectos</p>
                <p class="hidden md:block font-semibold cursor-pointer">Precio</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row w-full mt-10">
          <span class="material-icons text-green-500 text-5xl mx-auto"
            >sentiment_satisfied</span
          >
        </div>
        <div class="flex flex-row w-full mt-2">
          <div class="w-full bg-gray-50 h-16 flex flex-row shadow border card">
            <div class="flex flex-col w-1/5 h-full">
              <img
                class="h-12 w-12 my-auto ml-6"
                src="../assets/images/logo.png"
              />
            </div>
            <div class="flex flex-col w-4/5 h-full">
              <div class="flex flex-row justify-evenly md:justify-around align-middle my-auto">
                <p class="font-bold text-gray-400 cursor-pointer">
                  Localización
                </p>
                <p class="font-bold text-yellow-500 cursor-pointer">Contacto</p>
                <p class="hidden md:block font-bold text-gray-400 cursor-pointer">Proyectos</p>
                <p class="hidden md:block font-bold text-gray-400 cursor-pointer">Precio</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row mt-16 px-4 md:px-20">
          <p class="text-gray-700 italic">
            "En ocasiones, es más sencillo enfatizar en ciertos elementos,
            haciéndolo destacar respecto a los demás, simplemente haciendo que
            el resto de elementos resalten menos y no resaltando más el que se
            quiere enfatizar."
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-20 self-center justify-center align-middle items-center w-11/12 2xl:w-6/12 my-12 py-8 px-3 md:py-12 md:px-12 card border-gray-200 border hover:border-0 rounded-md"
    >
      <p class="text-center text-5xl font-extralight">
        Evitar etiquetas redundantes
      </p>
      <div class="flex flex-col w-full flex-wrap items-center mt-12">
        <div class="flex flex-row w-full">
          <span class="material-icons text-red-500 text-5xl mx-auto"
            >sentiment_dissatisfied</span
          >
        </div>
        <div class="flex flex-row w-full md:w-5/12 mt-2">
          <div class="w-full h-56 md:h-44 flex flex-row shadow rounded-lg border card">
            <div class="flex flex-col w-2/5 h-full">
              <img
                src="../assets/images/Ada.png"
                class="w-8/12 my-auto mx-auto"
              />
            </div>
            <div class="flex flex-col w-3/5 h-3/4 align-middle my-auto">
              <div class="flex flex-row w-full">
                <p class="mt-2 font-light">
                  <span class="text-gray-600 font-semibold">Name:</span> Ada
                  Lovelace
                </p>
              </div>
              <div class="flex flex-row w-full">
                <p class="mt-2 font-light">
                  <span class="text-gray-600 font-semibold">Job title:</span>
                  Software engineer
                </p>
              </div>
              <div class="flex flex-row w-full">
                <p class="mt-2 font-light">
                  <span class="text-gray-600 font-semibold">Email:</span>
                  ada.lovelace@email.com
                </p>
              </div>
              <div class="flex flex-row w-full">
                <p class="mt-2 font-light">
                  <span class="text-gray-600 font-semibold">Phone:</span> (+44)
                  10121815
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row w-full mt-10">
          <span class="material-icons text-green-500 text-5xl mx-auto"
            >sentiment_satisfied</span
          >
        </div>
        <div class="flex flex-row w-full md:w-5/12 mt-2">
          <div class="w-full h-44 md:h-44 flex flex-row shadow rounded-lg border card">
            <div class="flex flex-col w-2/5 h-full">
              <img
                src="../assets/images/Ada.png"
                class="w-8/12 my-auto mx-auto"
              />
            </div>
            <div class="flex flex-col w-3/5 h-3/4 align-middle my-auto">
              <div class="flex flex-row w-full">
                <p class="mt-2 font-semibold text-xl text-gray-700">
                  Ada Lovelace
                </p>
              </div>
              <div class="flex flex-row w-full">
                <p class="font-light text-yellow-500">
                  Software engineer
                </p>
              </div>
              <div class="flex flex-row w-full">
                <p class="mt-2 font-light text-gray-500">ada.lovelace@email.com</p>
              </div>
              <div class="flex flex-row w-full">
                <p class="mt-2 font-light text-gray-500">(+44) 10121815</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row mt-16 px-4 md:px-20">
          <p class="text-gray-700 italic">
            "Al igual que de forma innata, surgido por experiencias previas y conocimientos anteriores, el usuario espera encontrar determinados elementos dentro de una web, también será capaz de relacionar datos según su contexto y valor. En el ejemplo, no es necesario añadir etiquetas a los diferentes partes de la tarjeta, son fácilmenten entendibles por contexto."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>