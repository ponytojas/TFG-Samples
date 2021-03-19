import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Buttons from "../views/Buttons.vue";
import Sections from "../views/Sections.vue"
import Spaces from "../views/Spaces.vue"

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
  {
    path: "/spaces",
    name: "Spaces",
    component: Spaces,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;