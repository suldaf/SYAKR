<template>
  <nav
    class="sticky top-0 inset-x-0 flex items-center bg-background-dark text-white px-16 space-x-4 transition-all duration-1000"
    :class="navAnimationClass"
  >
    <div class="flex-grow flex-shrink-0">
      <img src="@/assets/logo.png" class="object-cover h-20" alt="" />
    </div>

    <div>Book Now</div>
    <div>Home</div>
    <div>About</div>
    <div>Clients</div>
    <div>Gears</div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
    };
  },

  computed: {
    navAnimationClass() {
      return {
        "bg-opacity-60": this.scrollY > 80,
        "bg-opacity-100": this.scrollY <= 80,
      };
    },
  },

  methods: {
    scrollListener() {
      this.scrollY = window.scrollY;
    },
  },

  created() {
    document.addEventListener("scroll", this.scrollListener);
  },

  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
