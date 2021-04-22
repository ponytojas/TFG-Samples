<template>
  <div class="flex flex-col mb-10">
    <span class="material-icons mx-auto mt-10 text-red-500 text-5xl"
      >sentiment_dissatisfied</span
    >
    <div class="p-4">
      <div class="flex flex-row h-auto min-h-screen w-full rounded-lg border">
        <div class="flex flex-col w-full h-full">
          <div class="flex flex-row mb-40 md:mb-0">
            <Navbar />
          </div>
          <div class="flex flex-row h-full w-full justify-center">
            <div class="flex flex-col w-8/12 h-full">
              <div class="flex flex-col md:flex-row h-32 pb-10">
                <div
                  class="flex flex-row md:flex-col w-10/12 md:w-1/3 h-full justify-center items-center"
                >
                  <div class="flex flex-col md:flex-row mb-4 text-2xl">
                    <p>Total Balance</p>
                  </div>
                  <div class="flex flex-col md:flex-row text-2xl">
                    <p>{{ available }}</p>
                  </div>
                </div>
                <div
                  class="flex flex-row md:flex-col w-full md:w-1/3 h-full justify-center items-center"
                >
                  <div class="flex flex-col md:flex-row mb-4 text-2xl">
                    <p>Month expenses</p>
                  </div>
                  <div class="flex flex-col md:flex-row text-2xl">
                    <p>{{ total_expenses }}</p>
                  </div>
                </div>
                <div
                  class="flex flex-row md:flex-col w-full md:w-1/3 h-full justify-center items-center"
                >
                  <div class="flex flex-col md:flex-row mb-4 text-2xl">
                    <p>Pending expenses</p>
                  </div>
                  <div class="flex flex-col md:flex-row text-2xl">
                    <p>{{ pending }}</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col mx-auto w-full">
                <div
                  class="flex flex-row mb-10 text-center"
                  v-for="spending in spendings"
                  :key="spending.id"
                >
                  <div class="w-full flex flex-row">
                    <div
                      class="flex flex-col w-1/2 items-center justify-items-center align-middle justify-center text-center"
                    >
                      <div
                        class="flex flex-row h-1/2 w-6/12 my-auto align-middle"
                      >
                        <span
                          class="material-icons mr-3 my-auto text-4xl text-gray-900"
                          :class="spending.color"
                        >
                          {{ spending.icon }}
                        </span>

                        <p class="my-auto py-2 text-xl">
                          {{ spending.concept }}
                        </p>
                      </div>
                      <div class="flex flex-row text-2xl h-1/2 w-6/12">
                        <p>{{ spending.place }}</p>
                      </div>
                    </div>
                    <div class="flex flex-col w-1/2 text-2xl my-auto">
                      <p>{{ spending.price }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="material-icons mx-auto mt-10 text-green-500 text-5xl"
      >sentiment_satisfied</span
    >
    <div class="p-4">
      <div class="flex flex-row h-auto min-h-screen w-full rounded-lg border">
        <div class="flex flex-col w-full h-full">
          <div class="flex flex-row mb-40 md:mb-0">
            <Navbar />
          </div>
          <div class="flex flex-row h-full w-full justify-center">
            <div class="flex flex-col w-8/12 h-full">
              <div
                class="flex flex-col md:flex-row h-32 mb-10 justify-evenly rounded-md"
              >
                <div
                  class="flex flex-row md:flex-col w-10/12 md:w-1/4 mx-2 h-full justify-center items-center align-middle my-auto bg-gray-600 text-white rounded-lg shadow-xl"
                >
                  <div class="flex flex-col md:flex-row mb-4 text-2xl">
                    <p>Month expenses</p>
                  </div>
                  <div class="flex flex-col md:flex-row text-3xl">
                    <p>{{ total_expenses }}</p>
                  </div>
                </div>
                <div
                  class="flex flex-row md:flex-col w-10/12 md:w-1/3 mx-2 h-full justify-center items-center align-middle my-auto bg-gray-800 text-white rounded-lg shadow-2xl"
                >
                  <div class="flex flex-col md:flex-row mb-4 text-2xl text-yellow-400 font-light">
                    <p>Total Balance</p>
                  </div>
                  <div class="flex flex-col md:flex-row text-3xl font-bold">
                    <p>{{ available }}</p>
                  </div>
                </div>
                <div
                  class="flex flex-row md:flex-col w-10/12 md:w-1/4 mx-2 h-full justify-center items-center align-middle my-auto bg-gray-600 text-white rounded-lg shadow-xl"
                >
                  <div class="flex flex-col md:flex-row mb-4 text-2xl">
                    <p>Pending expenses</p>
                  </div>
                  <div class="flex flex-col md:flex-row text-3xl">
                    <p>{{ pending }}</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col mx-auto w-full">
                <div
                  class="flex flex-row text-center mb-6 border-b"
                  v-for="spending in spendings"
                  :key="spending.id"
                >
                  <div class="w-full flex flex-row">
                    <div
                      class="flex flex-col w-1/2 items-center justify-items-center align-middle justify-center text-center"
                    >
                      <div
                        class="flex flex-row h-1/2 w-6/12 my-auto align-middle"
                      >
                        <span
                          class="material-icons mr-3 my-auto text-4xl text-gray-900"
                          :class="spending.color"
                        >
                          {{ spending.icon }}
                        </span>

                        <p class="my-auto py-2 text-xl">
                          {{ spending.concept }}
                        </p>
                      </div>
                      <div class="flex flex-row text-2xl h-1/2 w-6/12">
                        <p>{{ spending.place }}</p>
                      </div>
                    </div>
                    <div class="flex flex-col w-1/2 text-2xl my-auto">
                      <p>{{ spending.price }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      spendings: [
        {
          id: 1,
          price: "10€",
          concept: "Gasoline",
          place: "Fuel station",
          icon: "directions_car",
          color: "text-yellow-500",
        },
        {
          id: 2,
          price: "35€",
          concept: "Food",
          place: "Burguer King",
          icon: "restaurant_menu",
          color: "text-red-400",
        },
        {
          id: 3,
          price: "550€",
          concept: "Rent",
          place: "Wire transfer",
          icon: "home",
          color: "text-green-300",
        },
        {
          id: 4,
          price: "1,95€",
          concept: "Books",
          place: "Amazon",
          icon: "book",
          color: "text-blue-400",
        },
        {
          id: 5,
          price: "15,95€",
          concept: "Subscription",
          place: "Netflix",
          icon: "tv",
          color: "text-red-800",
        },
        {
          id: 6,
          price: "28,50€",
          concept: "Grocery",
          place: "Mercadona",
          icon: "local_grocery_store",
          color: "text-green-700",
        },
      ],
      available: "1.342,18€",
      total_expenses: "794,85€",
      pending: "19,95€",
    };
  },
};
</script>