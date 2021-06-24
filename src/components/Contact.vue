<template>
  <div class="contact">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Contact</h1>
      <h2 slot="title2" class="title2">連絡について</h2>
    </Title>

    <div class="contact-links center-align">
      <a href="https://twitter.com/chenjiaxu333" target="_blank">
        <img src="../assets/images/twitter.svg" alt="" />
      </a>

      <a href="https://github.com/BlaxBerry" target="_blank">
        <img src="../assets/images/github.svg" alt="" />
      </a>

      <a href="mailto:chenjiaxu333@gmail.com" target="_blank">
        <img src="../assets/images/gmail.svg" alt="" />
      </a>
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

<style lang="less">
.contact-links {
  a {
    display: inline-block;
    margin: 1rem;
    width: 4rem;
    height: 4rem;
    img {
      filter: grayscale(10%);
      transition: all 0.5s;
      &:hover {
        filter: grayscale(0);
        transform: scale(1.2);
      }
    }
  }
}
</style>
