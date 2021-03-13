import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Buttons from "../views/Buttons.vue";
import Sections from "../views/Sections.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/sections",
    name: "Sections",
    component: Sections,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;