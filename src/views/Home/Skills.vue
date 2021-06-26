<template>
  <div class="skills session whiteText">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Skills</h1>
      <h2 slot="title2" class="title2">スキルについて</h2>
    </Title>

    <!-- desc -->
    <div class="desc">
      <b>
        今まで身に付いているスキルは主にフロントエンドですが、
        その不足も認識していますが、挑戦して開発経験を積んだ上で、
        フロントエンドに関するスキルを幅広くスキルアップして、
        いずれバックエンドまで幅広くスキルアップに取り組んでいきたいと考えています。
      </b>
    </div>
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
