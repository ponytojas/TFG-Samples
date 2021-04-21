<template>
  <div class="flex flex-col">
    <div class="flex flex-row h-auto min-h-screen w-screen border-2">
      <div class="flex flex-col w-full h-full">
        <div class="flex flex-row mb-40 md:mb-0">
          <Navbar />
        </div>
        <div class="flex flex-row h-full w-full justify-center">
          <div class="flex flex-col w-8/12 h-full">
            <div class="flex flex-col md:flex-row h-32 pb-10">
              <div
                class="flex flex-row md:flex-col w-full md:w-1/3 h-full justify-center items-center"
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
            <div
              class="flex flex-row mb-10 w-full"
              v-for="spending in spendings"
              :key="spending.id"
            >
              <div class="w-full flex flex-row justify-around">
                <div class="flex flex-col w-1/2">
                  <div class="flex flex-row h-1/2 w-ful">
                    {{ spending.concept }}
                  </div>
                  <div class="flex flex-row h-1/2 w-ful">
                    {{ spending.place }}
                  </div>
                </div>
                <div class="flex flex-col w-1/2">
                  {{ spending.price }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row h-screen w-screen bg-blue-200"></div>
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
        { id: 1, price: "10€", concept: "Gasoline", place: "Fuel station" },
        { id: 2, price: "35€", concept: "Food", place: "Burguer King" },
        { id: 3, price: "550€", concept: "Rent", place: "Wire transfer" },
        { id: 4, price: "1,95€", concept: "Books", place: "Amazon" },
        { id: 5, price: "15,95€", concept: "Subscription", place: "Netflix" },
        { id: 6, price: "28,50€", concept: "Food", place: "Mercadona" },
      ],
      available: "1.342,18€",
      total_expenses: "794,85€",
      pending: "19,95€",
    };
  },
};
</script>