<template>
  <div class="min-h-screen" :class="bgColor">
    <navbar></navbar>
    <slot></slot>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";

export default {
  components: {
    Navbar,
  },

  props: {
    background: {
      type: String,
      default: "dark",
      validator(val) {
        ["dark", "light", "primary"].includes(val);
      },
    },
  },

  computed: {
    bgColor() {
      switch (this.background) {
        case "light":
          return "bg-background-light text-background-dark";
        case "primary":
          return "bg-primary text-background-light";
        default:
          return "bg-background-dark text-background-light";
      }
    },
  },
};
</script>
