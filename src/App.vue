<template>
  <div class="dark:bg-slate-800">
    <nav-bar />
    <home />
    <about />
    <projects />
    <contact />
    <page-footer />
  </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
import Home from "./components/home.vue";
import pageFooter from "./components/footer.vue";
import About from "./components/about.vue";
import Projects from "./components/projects.vue";
import Contact from "./components/contact.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Home,
    Projects,
    Contact,
    pageFooter,
    About,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
