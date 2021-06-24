<template>
  <div class="contact">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Contact</h1>
      <h2 slot="title2" class="title2">連絡について</h2>
    </Title>

    <!-- links -->
   <ContactLinks></ContactLinks>
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
import ContactLinks from "@/components/ContactLinks/ContactLinks.vue";
export default {
  components: {
    Title,
    ContactLinks
  },
};
</script>

<style lang="less" scoped></style>
