<template>
  <div class="works">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Works</h1>
      <h2 slot="title2" class="title2">一部の代表作品</h2>
    </Title>
    <!-- desc -->
    <p class="center-align">about my works.......</p>
    <br>

    <!-- PC -->
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title3">PC 端末</h1>
    </Title>
    <!-- desc -->
    <p class="center-align">Works</p>
    <!-- list -->
    <CardWorkPC :list="worksPC"></CardWorkPC>
    <!-- more -->
    <div class="center-align">
      <router-link to="/works">More Works</router-link>
    </div>
    <br />

    <!-- Mobile -->
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title3">Mobile 端末</h1>
    </Title>
    <!-- desc -->
    <p class="center-align">Works</p>
    <!-- list -->
    <CardWorkMobile :list="worksMobile"></CardWorkMobile>
    <!-- more -->
    <div class="center-align">
      <router-link to="/works">More Works</router-link>
    </div>
    <br />
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
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
    Title,
    CardWorkPC,
    CardWorkMobile,
  },
};
</script>

<style lang="less" scoped></style>
