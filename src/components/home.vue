<template>
  <div class="row-span-3 col-span-3">
    <div
      class="flex container px-8 flex-col md:flex-row py-16 items-center mx-auto description"
    >
      <div class="text-left float-left w-full">
        <p>
          <span class="text-3xl leading-12 font-bold text-yellow"
            >Welcome to my personal website!</span
          >
        </p>
        <span
          class="dark:text-lightgrey text-4xl leading-15 font-bold text-blue"
          >My name is Ettouibia Selma,
        </span>
        <p class="pt-4 leading-7 dark:text-white w-3/4">
          I'm a software engineer with a passion for developing innovative
          solutions with high quality and performance that fulfills customer
          needs. Aiming to leverage the proven and expanding knowledge through
          upcoming challenges.
        </p>
        <p class="mt-4 dark:text-white">
          Get in touch:
          <a target="_blank" href="https://www.linkedin.com/in/ettouibia-salma">
            <i class="pr-3 fab fa-linkedin-in"></i
          ></a>
          <a target="_blank" href="https://github.com/EttouibiaSalma"
            ><i class="pr-3 fab fa-github"></i
          ></a>
          <a href="mailto:ettoui.salma@gmail.com"
            ><i class="fa fa-envelope"></i
          ></a>
        </p>
      </div>
      <div class="hidden md:block float-right w-9/12 h-auto">
        <img
          v-if="darkElement"
          :src="`${path}/assets/images/dark-PL.png`"
          alt="coding"
        />
        <img v-else :src="`${path}/assets/images/PL.png`" alt="coding" />
      </div>
    </div>
    <section class="dark:bg-lightgrey bg-blue">
      <div
        class="dark:drop-shadow-xl container flex justify-center items-center px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
        <h3 class="font-bold text-white dark:text-blue">
          “Knowledge is power.” – Francis Bacon
        </h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home-page",
  components: {},
  data() {
    return {
      darkElement: false,
      path: "https://ettouibiasalma.github.io/My_Portfolio",
    };
  },
  mounted() {
    window.addEventListener("dark-localstorage-changed", (event) => {
      if (event.detail.storage == "true") {
        this.darkElement = true;
      } else this.darkElement = false;

      console.log(event.detail.storage);
    });
  },
};
</script>

<style lang="scss" scoped></style>
