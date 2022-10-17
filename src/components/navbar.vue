<template>
  <div class="relative container mx-auto p-8 row-span-3 col-span-4 pt-5">
    <div class="flex items-center justify-between">
      <div>
        <a href="/"
          ><img
            v-if="isDark"
            class="w-[99px] h-[99px]"
            :src="`${path}/assets/images/ES-dark.png`"
            alt="logo"
          />
          <img
            v-else
            class="w-[99px] h-[99px]"
            :src="`${path}/assets/images/ES.png`"
            alt="logo"
          />
        </a>
      </div>
      <ul
        class="hidden md:flex space-x-8 text-blue dark:text-lightgrey dark:font-semibold underline decoration-yellow underline-offset-4 text-lg font-robotoslab"
      >
        <a class="hover:text-xl" href="#about"><li>About</li></a>
        <a class="hover:text-xl" href="#projects"><li>Projects</li></a>
        <a class="hover:text-xl" href="#contact"><li>Contact</li></a>
      </ul>
      <span class="hidden md:flex float-right pl-10 text-lg">
        <strong
          class="bg-white text-blue p-2 rounded-lg"
          v-if="isDark"
          @click="toggleLightingMode"
          ><i class="fa fa-sun"></i> Light mode</strong
        >
        <strong
          class="bg-gray-800 text-white p-2 rounded-lg"
          v-else
          @click="toggleLightingMode"
          ><i class="fa fa-moon"></i> Dark mode</strong
        >
      </span>
      <button
        :class="{ open: isOpen }"
        class="block hamburger md:hidden focus:outline-none"
        id="menu-btn"
        @click="toggleMenu"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
    <div class="md:hidden">
      <div
        id="menu"
        :class="{ hidden: !isOpen }"
        class="absolute flex flex-col items-center self-end py-6 mt-6 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-4 right-4 drop-shadow-md"
      >
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isDark: false,
      isOpen: false,
      path: "https://ettouibiasalma.github.io",
    };
  },
  methods: {
    toggleLightingMode() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark", "true");
        localStorage.theme = "dark";
        window.dispatchEvent(
          new CustomEvent("dark-localstorage-changed", {
            detail: {
              storage: localStorage.getItem("dark"),
            },
          })
        );
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark", "false");
        window.dispatchEvent(
          new CustomEvent("dark-localstorage-changed", {
            detail: {
              storage: localStorage.getItem("dark"),
            },
          })
        );
      }
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped></style>
