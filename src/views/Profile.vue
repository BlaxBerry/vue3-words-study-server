<template>
  <div id="profile">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">{{ this.$route.name }}</h1>
      <h2 slot="title2" class="title2">今までの自分について</h2>
    </Title>

    <!-- Contact links -->
    <ContactLinks></ContactLinks>

    <!-- contnet -->
    <div class="content">
      <p class="center-align">Profile Page</p>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
import ContactLinks from "@/components/ContactLinks/ContactLinks.vue";
export default {
  components: {
    Title,
    ContactLinks,
  },
};
</script>

<style lang="less" scoped></style>
