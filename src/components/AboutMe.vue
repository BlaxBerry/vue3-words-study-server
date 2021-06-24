<template>
  <div class="about-me bgk-pic-box ">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">About Me</h1>
      <h2 slot="title2" class="title2">自分について</h2>
    </Title>

    <!-- contnet -->
    <div class="about-card glass-box">
      <!-- left / top side -->
      <div class="about-card-img">
        <img src="../assets/images/github.svg" alt="" />
      </div>

      <!-- right / bottom -->
      <div class="about-card-text">
        <p>
          中国出身、外国語学部卒業、前職は不動産営業。
          前職でITプログラミングを知り初めて独学して、プログラミングに深く惹かれ、
          日々勉強や練習を重ね、一流なエンジニアという夢を目指して頑張って行きます。
        </p>
        <!-- links -->
        <ContactLinks></ContactLinks>
        <!-- Profile -->
        <div class="center-align">
          <router-link to="/profile">Show Profile -></router-link>
        </div>
      </div>

      <!-- glass-bgk-img -->
      <!-- <img src="../assets/upload/logo.png" alt="" class="glass-bgk-img" /> -->
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

<style lang="less" scoped>
.about-me {
  position: relative;
  height: 100vh;
  width: 100%;

  .about-card {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 50vh;
    min-height: 10rem;
    transform: translate(-50%, -50%);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: rgba(250, 250, 250, 0.8);
    // background-color: darkgoldenrod; /////

    // left / top side
    .about-card-img {
      width: 20%;
      // height: 100%;//////
      text-align: center;
      img {
        width: 10rem;
      }
    }
    // right / bottom
    .about-card-text {
      width: 50%;
      padding: 1rem;
      // height: 100%;//////
      // text-align: center;
      // background-color: antiquewhite; //////
      p {
        font-style: normal;
      }
      .contact-links {
        text-align: left;
      }
    }
  }
}
</style>
