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
      <div class="cardskill-container">
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
      </div>
    </div>

    <div class="server-side">
       <h4 class="title3">Server Side</h4>
      <div class="cardskill-container">
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
      </div>
    </div>

    <div class="data-base">
       <h4 class="title3">Data Base</h4>
      <div class="cardskill-container">
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
      </div>
    </div>

    <div class="others">
       <h4 class="title3">Others</h4>
      <div class="cardskill-container">
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
      </div>
    </div>

    <!-- link -->
    <div class="center-align">
      <router-link to="/skills">Show Skills Detail -></router-link>
    </div>
  </div>
</template>

<script>
import CardSkill from "@/components/CardSkill.vue";
export default {
  data() {
    return {};
  },
  components: {
    CardSkill,
  },
};
</script>

<style lang="less" scoped>
.cardskill-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
