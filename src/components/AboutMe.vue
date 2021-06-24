<template>
  <div class="about">
    <!-- title -->
    <Title>
       <h1 slot="title1" class="title1">About Me</h1>
       <h2 slot="title2" class="title2">自分について</h2>
    </Title>

    <!-- contnet -->
    <div>
      <p class="center-align">About Myself</p>
    </div>

    <!-- link -->
    <div class="center-align">
      <router-link to="/profile">Show Profile -></router-link>
    </div>
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
