<template>
  <div class="works">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Works</h1>
      <h2 slot="title2" class="title2">一部の作品</h2>
    </Title>
    <!-- desc -->
    <div class="desc">
      <p>
        最初は静的なページから知り始めましたが、
        その後Ajax技術やサーバーやデータベース関連の知識などを日々頑張っており、
        この段階的な勉強とともに、独自の練習や開発の成果を残してきました。
        不足のところも認識していますが、今後は必ず努力し、より良い作品を提供するために、引き続き勉強して行きたいと思います。    
      </p>
    </div>
    <br />

    <!-- Mobile -->
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title3">- Mobile 端末 -</h1>
    </Title>
    <!-- desc -->
    <p class="center-align"></p>
    <!-- list -->
    <CardWorkMobile :list="worksMobile"></CardWorkMobile>

    <!-- PC -->
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title3">- PC 端末 -</h1>
    </Title>
    <!-- desc -->
    <p class="center-align"></p>
    <!-- list -->
    <CardWorkPC :list="worksPC"></CardWorkPC>

    <!-- more -->
    <!-- <div class="center-align">
      <router-link to="/works">More Works</router-link>
    </div> -->
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

<style lang="less" scoped>
.session {
  padding: 0;
  font-style: normal;
}
</style>
