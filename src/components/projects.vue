<template>
  <div class="flex container flex-col md:flex-row p-8 items-center mx-auto">
    <section id="projects">
      <h2
        class="font-bold mb-8 text-2xl text-left dark:text-lightgrey text-gray-800 underline decoration-yellow decoration-4 underline-offset-8 space-x-8"
      >
        Recent projects
      </h2>
      <div class="px-5 mx-auto mt-32">
        <div
          class="flex flex-col mt-24 space-y-4 text-left md:space-y-0 md:flex-row md:space-x-4"
        >
          <div
            class="block flex-col p-8 rounded-lg bg-gray-50 shadow-md md:flex md:w-1/2"
          >
            <h5 class="text-lg text-yellow text-center items-center font-bold">
              Anti Fraud System
            </h5>
            <p class="text-sm text-justify text-darkGrayishBlue leading-6 pt-2">
              A RESTfull web service that covers fundamentals of fraud detection
              and rule-based systems. A system with an expanded role model, a
              set of REST endpoints responsible for interacting with users, and
              an internal transaction validation logic based on a set of
              heuristic rules.
            </p>
            <p class="text-sm text-justify text-darkGrayishBlue leading-6 pt-2">
              <strong>Technologies & tools:</strong> Spring Boot, Spring MVC,
              Spring Security, Spring Data JPA, H2 database, and Spring
              actuator.
            </p>
            <a
              target="_blank"
              href="https://github.com/EttouibiaSalma/Anti_Fraud_System"
              ><i class="pt-6 fa-2x fab fa-github"></i
            ></a>
          </div>

          <div
            class="block flex-col leading-7 p-8 rounded-lg bg-gray-50 shadow-md md:flex md:w-1/2"
          >
            <h5 class="text-lg text-yellow text-center items-center font-bold">
              Reddit Clone
            </h5>
            <p class="text-sm text-justify text-darkGrayishBlue leading-6 pt-2">
              A clone of the famous American social news aggregation, content
              rating, and discussion website. It's is a social news site where
              users create and share content.
            </p>
            <p class="text-sm text-justify text-darkGrayishBlue pt-2 leading-6">
              <strong>Technologies & tools:</strong> Spring Boot, Spring MVC,
              Spring Security with JWT authentication, Spring Data JPA with
              MySQL, and Angular.
            </p>
            <a
              target="_blank"
              href="https://github.com/EttouibiaSalma?tab=repositories&q=reddit_clone&type=&language=&sort="
              ><i class="pt-6 fa-2x fab fa-github"></i
            ></a>
          </div>
        </div>
        <!-- Button -->
        <div class="my-16">
          <a
            target="_blank"
            href="https://github.com/EttouibiaSalma"
            class="dark:bg-yellow dark:text-gray-50 font-bold p-3 px-6 pt-2 text-white bg-gray-800 rounded-full baseline hover:bg-lightgrey"
            >More projects</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "projects-page",
};
</script>

<style lang="scss" scoped></style>
