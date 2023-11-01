<template>
  <div
    class="flex container p-8 flex-col md:flex-row py-8 items-center mx-auto"
    id="contact"
  >
    <div class="form w-full">
      <form ref="form" @submit.prevent="sendMessage" class="get-intouch">
        <h2
          class="dark:text-lightgrey font-bold mb-8 text-2xl text-left text-gray-800 underline decoration-yellow decoration-4 underline-offset-8 space-x-8"
        >
          Get in touch
        </h2>
        <p class="dark:text-white text-justify leading-7">
          Hi there 👋, if you have any inqueries or feedback don't hesitate to
          fill the form bellow, or you can reach me out in other social media
          plateforms:
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
        <p class="dark:text-white text-left mb-4">
          Leave your contact info here:
        </p>
        <div class="fullname mb-5">
          <label
            class="dark:text-lightgrey block pl-2 text-left xl:pl-44 pb-2 font-bold"
            for="fullName"
            >Full name:</label
          >
          <input
            class="py-2 w-1/2 drop-shadow-md rounded-md p-2"
            id="fullName"
            v-model="fields.fullname"
            name="fullname"
            placeholder="Enter your full name"
            type="text"
          />
          <p class="text-red-600 text-left pl-44">
            {{ errors.fullname }}
          </p>
        </div>
        <div class="email mb-5">
          <label
            class="dark:text-lightgrey block pl-2 text-left xl:pl-44 pb-2 font-bold"
            for="email"
            >Email:</label
          >
          <input
            v-model="fields.email"
            class="w-1/2 ml-2 drop-shadow-md rounded-md p-2"
            id="email"
            name="email"
            placeholder="Enter your email"
            type="text"
          />
          <p class="text-red-600 text-left pl-44">
            {{ errors.email }}
          </p>
        </div>
        <div class="subject mb-5">
          <label
            class="dark:text-lightgrey pl-2 block text-left xl:pl-44 pb-2 font-bold"
            for="subject"
            >Subject:</label
          >
          <input
            v-model="fields.subject"
            name="subject"
            placeholder="Enter the subject"
            class="w-1/2 ml-2 drop-shadow-md rounded-md p-2"
            id="subject"
            type="text"
          />
          <p class="text-red-600 text-left pl-44">
            {{ errors.subject }}
          </p>
        </div>

        <div class="message mb-5">
          <label
            class="pl-2 dark:text-lightgrey block text-left xl:pl-44 pb-2 font-bold"
            for="message"
            >Message:</label
          >
          <textarea
            class="ml-2 drop-shadow-md rounded-md p-2 w-1/2"
            name="message"
            placeholder="Your message .."
            id="message"
            v-model="fields.message"
            cols="30"
            rows="10"
          ></textarea>
          <p class="text-red-600 text-left pl-44">
            {{ errors.message }}
          </p>
        </div>
        <button
          class="dark:bg-lightgrey dark:text-gray-800 bg-gray-800 text-white px-5 py-3 font-bold rounded"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
    <div class="hidden lg:block contact-pic">
      <img
        v-if="isDark"
        class="ml-2 w-7/12 float-right"
        :src="`${path}/assets/images/dark-contact.png`"
        alt="coding"
      />
      <img
        v-else
        class="ml-2 w-7/12 float-right"
        :src="`${path}/assets/images/contact.png`"
        alt="coding"
      />
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "contact-page",
  data() {
    return {
      fields: {
        fullname: "",
        email: "",
        subject: "",
        message: "",
      },
      isDark: false,
      path: "https://eselma.tech",
      errors: {
        fullname: undefined,
        email: undefined,
        subject: undefined,
        message: undefined,
      },
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
  methods: {
    sendMessage(ev) {
      ev.preventDefault();
      this.errors = this.validateForm(this.fields);

      if (Object.keys(this.errors).length) return;
      //Push data to firebase
      try {
        emailjs.sendForm(
          "gmail_service",
          "template_yzwj21t",
          this.$refs.form,
          "vIuD3fAxrL0nsv0yS"
        );
      } catch (error) {
        console.log({ error });
      }
      (this.fields.fullname = ""),
        (this.fields.email = ""),
        (this.fields.subject = ""),
        (this.fields.message = "");
    },
    validateForm(fields) {
      const fieldErrors = {};
      if (!fields.fullname) fieldErrors.fullname = "full name is required";
      if (!fields.email) fieldErrors.email = "email is required";
      if (!fields.subject) fieldErrors.subject = "subject is required";
      if (!fields.message) fieldErrors.message = "message is required";
      if (fields.email && !this.isEmail(fields.email)) {
        fieldErrors.email = "Invalid Email";
      }
      return fieldErrors;
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped></style>
