<template>
  <div id="profile">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">{{ this.$route.name }}</h1>
      <h2 slot="title2" class="title2">プロフィール</h2>
    </Title>


    <!-- about me -->
    <AboutMe></AboutMe>

    <!-- Experience -->
    <div class="experience">
      <!-- title -->
      <Title>
        <h1 slot="title1" class="title1">Experience</h1>
        <h2 slot="title2" class="title2">今までの自分について</h2>
      </Title>
      <!-- contnet -->
      <div class="desc">
        <p>Profile Page</p>
      </div>
    </div>

    <!-- Study -->
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Experience</h1>
      <h2 slot="title2" class="title2">今までの自分について</h2>
    </Title>
    <!-- content -->
    <div class="desc">
      <p>学習進路</p>
    </div>
  </div>
</template>

<script>
import AboutMe from "@/views/Profile/AboutMe.vue";
import Title from "@/components/Title/Title.vue";
// import ContactLinks from "@/components/ContactLinks/ContactLinks.vue";
export default {
  components: {
    AboutMe,
    Title,
    // ContactLinks,
  },
};
</script>

<style lang="less" scoped></style>
