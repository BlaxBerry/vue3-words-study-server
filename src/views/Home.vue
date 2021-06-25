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
    <MaskWork :workData="cardWorkData" v-if="maskWorkFlag"></MaskWork>
    <!-- MaskWork -->
    <MaskSkill :skillData="cardSkillData" v-if="maskSkillFlag"></MaskSkill>

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
import MaskWork from "@/components/Mask/MaskWork.vue";
import MaskSkill from "@/components/Mask/MaskSkill.vue";

export default {
  name: "Home",
  data() {
    return {
      // mask show/disapper flag
      maskWorkFlag: false,
      maskSkillFlag:false,
      // card is clicked then send work data to here
      cardWorkData: {},
      cardSkillData:{}
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
    MaskSkill,
  },
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
}
</style>
