<template>
  <div class="skills session">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Skills</h1>
      <h2 slot="title2" class="title2">スキルについて</h2>
    </Title>

    <!-- desc -->
    <p>
      今まで身に付いているスキルは主にフロントエンドですが、
      今後は積極的に挑戦し、開発経験を積んだ上で、
      フロントエンドからバックエンドまで、幅広くスキルアップに取り組んでいきたいと考えています。
      スキルに対する理解が浅く、専門性の低さも認識していますが、
      必ず引き続き勉強し、少しずつ専門性を高めて行きたいと思います。
    </p>
    <br />

    <p class="center-align showdetail">
      <b>( Click the picture of skill to Check More Details )</b>
    </p>

    <!-- 1. front-end -->
    <Title>
      <h3 slot="title3" class="title3">- Front End -</h3>
    </Title>
    <!-- <p class="center-align">Click the picture to Check More Details</p> -->
    <!-- list -->
    <CardSkill :list="frondEnd"></CardSkill>

    <!-- 2. server-side -->
    <Title>
      <h3 slot="title3" class="title3">- Server Side -</h3>
    </Title>
    <!-- <p class="center-align">Click the picture to Check More Details</p> -->
    <!-- list -->
    <CardSkill :list="serverSide"></CardSkill>

    <!-- 3. database -->
    <Title>
      <h3 slot="title3" class="title3">- Database -</h3>
    </Title>
    <!-- <p class="center-align">Click the picture to Check More Details</p> -->
    <!-- list -->
    <CardSkill :list="dataBase"></CardSkill>

    <!-- 4. other skills -->
    <Title>
      <h3 slot="title3" class="title3">- Others -</h3>
    </Title>
    <!-- <p class="center-align">Click the picture to Check More Details</p> -->
    <!-- list -->
    <CardSkill :list="otherSkills"></CardSkill>
    <br />
    <p class="center-align showdetail">
      <b>( Click the picture of skill to Check More Details )</b>
    </p>
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
import CardSkill from "@/components/Card/CardSkill.vue";
// // JSON 数据
import frontEndJson from "@/assets/json/skillsFrontEnd.json";
import serverSideJson from "@/assets/json/skillsServer.json";
import dataBaseJson from "@/assets/json/skillsDataBase.json";
import otherSkillsJson from "@/assets/json/skillsOthers.json";
// // 调用
let frondEnd = frontEndJson;
let serverSide = serverSideJson;
let dataBase = dataBaseJson;
let otherSkills = otherSkillsJson;

export default {
  data() {
    return {
      // front-end skills Array
      frondEnd,
      serverSide,
      dataBase,
      otherSkills,
    };
  },
  components: {
    Title,
    CardSkill,
  },
};
</script>

<style lang="less" scoped>
.showdetail {
  margin-top: 2rem;
}
</style>
