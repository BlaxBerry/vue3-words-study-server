<template>
  <div class="works">
    <!-- title -->
    <h2 class="title">Works</h2>
    <h3 class="title2">について</h3>

    <!-- contnet -->
    <!-- PC -->
    <h4 class="title3">PC</h4>
    <p class="center-align">Works</p>
    <CardWorkPC :list="worksPC"></CardWorkPC>
    <!-- more -->
    <div class="center-align">
      <router-link to="/works">More Works</router-link>
    </div>
    <br />

    <!-- Mobile -->
    <h4 class="title3">Mobile</h4>
    <p class="center-align">Works</p>
    <CardWorkMobile :list="worksMobile"></CardWorkMobile>
    <!-- more -->
    <div class="center-align">
      <router-link to="/works">More Works</router-link>
    </div>
    <br />
  </div>
</template>

<script>
import CardWorkPC from "@/components/Card/CardWorkPC.vue";
import CardWorkMobile from "@/components/Card/CardWorkMobile.vue";
// JSON 数据
import worksPCJSON from "@/assets/json/worksPC.json";
import worksMobileJSON from "@/assets/json/worksMobile.json";
// 调用
let worksPC = worksPCJSON;
let worksMobile = worksMobileJSON;

export default {
  data() {
    return {
      worksPC,
      worksMobile,
    };
  },
  components: {
    CardWorkPC,
    CardWorkMobile,
  },
};
</script>

<style lang="less" scoped></style>
