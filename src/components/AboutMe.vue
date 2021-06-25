<template>
  <div class="about-me bgk-pic-box ">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">About Me</h1>
      <h2 slot="title2" class="title2">自分について</h2>
    </Title>

    <!-- contnet -->
    <div class="about-card glass-box session">
      <!-- left / top side -->
      <div class="about-card-img">
        <img src="../assets/images/github.svg" alt="" />
      </div>

      <!-- right / bottom -->
      <div class="about-card-text">
        <p>
          中国出身、外国語学部卒業、前職は不動産営業。
          前職でITプログラミングを知り初めて独学して、プログラミングに深く惹かれました。
          一流なエンジニアという夢を目指して、日々勉強や練習を重ねて頑張って行きます。
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
  display: flex;
  flex-direction: column;
  // justify-content: center;
  padding-top: 6%;
  align-items: center;
  height: 100vh;
  width: 100%;

  .about-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3rem;
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
