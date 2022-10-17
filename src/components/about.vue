<template>
  <div class="" id="about">
    <div class="flex container flex-col md:flex-row p-8 items-center mx-auto">
      <div class="hidden md:block contact-pic">
        <img
          v-if="isDark"
          class=""
          :src="`${path}/assets/images/dark-coding-girl.png`"
          alt="coding"
        />
        <img
          v-else
          class=""
          :src="`${path}/assets/images/coding-girl.png`"
          alt="coding"
        />
      </div>
      <div class="form w-full pl-10 md:pl-0">
        <h2
          class="dark:text-lightgrey font-bold mb-8 text-2xl text-left text-gray-800 underline decoration-yellow decoration-4 underline-offset-8 space-x-8"
        >
          About me
        </h2>
        <p class="dark:text-white text-left w-3/4 leading-8">
          I'm Selma a software engineer from Morocco, I've recently graduated
          with a master's degree in computer systems engineering. I've been
          always passionate about software engineering, through my past
          internships I have gained experience working with teams in different
          software developement stages, ensuring a high quality and fulfillment
          of business market needs. I'm looking forward to advanced my skills
          set through targeted mentoship and challenging projects.
        </p>
      </div>
    </div>

    <section class="dark:bg-gray-800 bg-gray-50">
      <div class="container items-center p-8 mx-auto">
        <div class="heading flex-col items-start w-full mb-8">
          <h2
            class="dark:underline dark:decoration-lightgrey decoration-4 dark:text-lightgrey font-bold text-2xl text-left text-black"
          >
            Tech stack:
          </h2>
        </div>
        <div class="technologies grid grid-cols-3 md:grid-cols-6 gap-4">
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/spring.png`"
                alt=""
              />
            </div>
            <strong>Spring</strong>
          </div>
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 items-center shadow bg-white rounded-lg justify-center"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/angular.png`"
                alt=""
              />
            </div>
            <strong class="">Angular</strong>
          </div>
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 shadow bg-white rounded-lg justify-center"
          >
            <div class="flex justify-center">
              <img
                class="w-32 h-28 p-2"
                :src="`${path}/assets/images/stack/vuejs.png`"
                alt=""
              />
            </div>

            <strong>Vue Js</strong>
          </div>
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/typescript.png`"
                alt=""
              />
            </div>
            <strong>TypeScript</strong>
          </div>
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/tailwind.jpeg`"
                alt=""
              />
            </div>
            <strong>Tailwind Css</strong>
          </div>
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/graphql.png`"
                alt=""
              />
            </div>
            <strong>GraphQL</strong>
          </div>

          <!---  Section 2 -->
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/postgresql.png`"
                alt=""
              />
            </div>
            <strong>PostgreSQL</strong>
          </div>
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/mongo.png`"
                alt=""
              />
            </div>
            <strong>MongoDB</strong>
          </div>

          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <img
              class="w-30 h-28 p-2"
              :src="`${path}/assets/images/stack/docker.png`"
              alt=""
            />
            <strong>Docker</strong>
          </div>

          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/google-cloud.png`"
                alt=""
              />
            </div>
            <strong>Google Cloud</strong>
          </div>

          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/laravel.png`"
                alt=""
              />
            </div>
            <strong>Laravel</strong>
          </div>
          <div
            class="flex flex-col transition hover:duration-300 ease-in-out transform hover:scale-110 bg-white rounded-lg justify-center shadow"
          >
            <div class="flex justify-center">
              <img
                class="w-30 h-28 p-2"
                :src="`${path}/assets/images/stack/agile.png`"
                alt=""
              />
            </div>
            <strong>Agile</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      isDark: false,
      path: "https://ettouibiasalma.github.io",
    };
  },
  mounted() {
    window.addEventListener("dark-localstorage-changed", (event) => {
      if (event.detail.storage == "true") {
        this.isDark = true;
      } else this.isDark = false;

      console.log(event.detail.storage);
    });
  },
};
</script>

<style lang="sass" scoped></style>
