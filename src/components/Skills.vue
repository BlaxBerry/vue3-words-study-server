<template>
  <div class="skills">
    <!-- title -->
    <h2 class="title">Skills</h2>
    <h3 class="title2">について</h3>
    <hr />
    <p class="center-align">Skills</p>

    <!-- contnet -->
    <div class="front-end">
      <h4 class="title3">Front End</h4>
      <CardSkill :skills="frondEnd"></CardSkill>
    </div>

    <div class="server-side">
      <h4 class="title3">Server Side</h4>
      <CardSkill :skills="serverSide"></CardSkill>
    </div>

    <div class="data-base">
      <h4 class="title3">Data Base</h4>
      <CardSkill :skills="dataBase"></CardSkill>
    </div>

    <div class="others">
      <h4 class="title3">Others</h4>
      <CardSkill :skills="otherSkills"></CardSkill>
    </div>

    <!-- link -->
    <div class="center-align">
      <router-link to="/skills">Show Skills Detail -></router-link>
    </div>
  </div>
</template>

<script>
import CardSkill from "@/components/CardSkill.vue";
// JSON 数据
import frontEndJson from "@/assets/json/frontEnd.json";
import serverSideJson from "@/assets/json/server.json";
import dataBaseJson from "@/assets/json/dataBase.json";
import otherSkillsJson from "@/assets/json/others.json"
// 调用
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
      otherSkills
    };
  },
  components: {
    CardSkill,
  },
};
</script>

<style lang="less" scoped></style>
