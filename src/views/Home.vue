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

    <!-- MaskWork -->
    <MaskWork :workData="cardWorkData" v-if="maskFlag"></MaskWork>
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
import MaskWork from "@/views/MaskWork.vue";

export default {
  name: "Home",
  data() {
    return {
      // mask work detail data flag
      maskFlag: false,
      // card Work is clicked then send work data to here
      cardWorkData: {},
    };
  },
  components: {
    // HelloWorld
    Header,
    AboutSite,
    AboutMe,
    Skills,
    Works,
    Contact,
    Footer,
    MaskWork,
  },
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
}
</style>
