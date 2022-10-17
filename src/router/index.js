import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: () => import("../components/home.vue"),
  },
  {
    path: "/about",
    name: "AboutMe",
    component: () => import("../components/about.vue"),
  },
  {
    path: "/projects",
    name: "projectsPage",
    component: () => import("../components/projects.vue"),
  },
  {
    path: "/contact",
    name: "contact-page",
    component: () => import("../components/contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
