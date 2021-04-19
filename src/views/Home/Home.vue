<template>
  <layout background="dark">
    <hero-section></hero-section>

    <short-about-section></short-about-section>

    <instagram-feed></instagram-feed>

    <contact-us-section></contact-us-section>
  </layout>
</template>

<script>
import Layout from "@/components/Layout/Layout.vue";
import HeroSection from "./HeroSection.vue";
import ShortAboutSection from "./ShortAboutSection.vue";
import InstagramFeed from "./InstagramFeed.vue";
import ContactUsSection from "./ContactUsSection.vue";

export default {
  components: {
    Layout,
    HeroSection,
    ShortAboutSection,
    InstagramFeed,
    ContactUsSection,
  },
};
</script>
