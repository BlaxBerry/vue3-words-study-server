<template>
  <div class="home">

    <!-- About Me-->
    <TopPic></TopPic>

    <!-- Works -->
    <Works></Works>

    <!-- Skills -->
    <Skills></Skills>

    <!-- Contact -->
    <Contact></Contact>

    <!-- Footer -->
    <Footer></Footer>

    <!-- Masks -->
    <transition name="bounce">
      <!-- MaskWork -->
      <MaskWork :workData="cardWorkData" v-if="maskWorkFlag"></MaskWork>
      <!-- MaskWork -->
      <MaskSkill :skillData="cardSkillData" v-if="maskSkillFlag"></MaskSkill>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import AboutSite from "@/components/AboutSite.vue";
import TopPic from "@/views/Home/TopPic.vue";
import Skills from "@/views/Home/Skills.vue";
import Works from "@/views/Home/Works.vue";
import Contact from "@/views/Home/Contact.vue";
import Footer from "@/views/Home/Footer.vue";
import MaskWork from "@/components/Mask/MaskWork.vue";
import MaskSkill from "@/components/Mask/MaskSkill.vue";

export default {
  name: "Home",
  data() {
    return {
      // mask show/disapper flag
      maskWorkFlag: false,
      maskSkillFlag: false,
      // card is clicked then send work data to here
      cardWorkData: {},
      cardSkillData: {},
    };
  },
  components: {
    TopPic,
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

// mask animation
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
