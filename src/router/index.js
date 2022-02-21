import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import VuexCounter from "../components/vuex/VuexCounter.vue";
import Employees from "../components/Employees.vue";
import UserList from "../components/UserList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "VuexCounter",
    component: VuexCounter,
  },
  {
    path: "/employees",
    name: "Employees",
    component: Employees,
  },
  {
    path: "/users",
    name: "UserList",
    component: UserList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
