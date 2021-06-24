<template>
  <div id="detailskills">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">{{ this.$route.name }}</h1>
      <h2 slot="title2" class="title2">今までのスキル詳細について</h2>
    </Title>

    <!-- contnet -->
    <div>
      <p class="center-align">Detail SKills Page</p>
      <br />
      name:{{ this.$route.params.name }}
      <br />
      position:{{ this.$route.params.desc }}
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
// // JSON 数据
import frontEndJson from "@/assets/json/skillsFrontEnd.json";
import serverSideJson from "@/assets/json/skillsServer.json";
import dataBaseJson from "@/assets/json/skillsDataBase.json";
import otherSkillsJson from "@/assets/json/skillsOthers.json";


export default {
  data() {
    return {
      frondEnd:[],
      serverSide:[],
      dataBase:[],
      others:[]
    };
  },
  components: {
    Title,
  },
  created() {
    console.log(this.$route.params);
    // // 调用
    this.frondEnd = frontEndJson;
    this.serverSide = serverSideJson;
    this.dataBase = dataBaseJson;
    this.others = otherSkillsJson;
  },
};
</script>

<style lang="less" scoped></style>
