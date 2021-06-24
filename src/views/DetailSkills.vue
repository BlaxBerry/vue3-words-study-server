<template>
  <div id="detailskills">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">{{this.$route.name}}</h1>
      <h2 slot="title2" class="title2">今までのスキル詳細について</h2>
    </Title>


    <!-- contnet -->
    <div>
      <p class="center-align"> Detail SKills Page</p>
    </div>

    <!-- link -->
    <!-- <div class="center-align">
      <router-link to="/skills">Show Skills Detail -></router-link>
    </div> -->
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
export default {
    components: {
    Title,
  },
};
</script>

<style lang="less" scoped></style>
