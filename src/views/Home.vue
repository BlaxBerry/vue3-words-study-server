<template>
  <div class="home">
    Home Page

    <!-- Header -->
    <Header></Header>

    <!-- About Site-->
    <AboutSite></AboutSite>

    <!-- About Me-->
    <AboutMe></AboutMe>

    <!-- Skills -->
    <Skills></Skills>

    <!-- Works -->
    <Works></Works>

    <!-- Contact -->
    <Contact></Contact>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue";
import AboutSite from "@/components/AboutSite.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Works from "@/components/Works.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Header,
    AboutSite,
    AboutMe,
    Skills,
    Works,
    Contact,
    Footer,
  },
};
</script>
