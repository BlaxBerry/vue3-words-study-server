<template>
  <div class="about-me">
    <!-- contnet -->
    <div class="about-card glass-box session">
      <!-- left / top side -->
      <div class="about-card-img">
        <img src="../../assets/images/github.svg" alt="" />
      </div>

      <!-- right / bottom -->
      <div class="about-card-text">
        <p>
          <vue-typer
            :text="[
              '中国出身、外国語学部卒業、前職は不動産営業。\n前前職でITプログラミングを知り始めてから、日々進化しているIT技術の魅力に深く惹かれました。将来エンジニアとして、この社会に貢献し続きたいと思います。\nそのため、日々勉強や練習を重ねて、一流なエンジニアという夢を目指して、頑張っています。',
            ]"
            class="top-text"
            :repeat="0"
            :preTypeDelay="1000"
            :typeDelay="100"
            :preEraseDelay="5000"
            :eraseDelay="2000"
          ></vue-typer>
        </p>

        <!-- links -->
        <ContactLinks></ContactLinks>
      </div>
    </div>
  </div>
</template>

<script>
// import Title from "@/components/Title/Title.vue";
import ContactLinks from "@/components/ContactLinks/ContactLinks.vue";
export default {
  components: {
    // Title,
    ContactLinks,
  },
};
</script>

<style lang="less" scoped>
.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url(../../assets/images/bgk01.jpg) center;
  background-size: cover;
  padding: 4rem 0;

  .about-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem;
    background-color: rgba(250, 250, 250, 0.8);

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
      p {
        min-height: 15rem;
        font-style: normal;
      }
      .contact-links {
        text-align: left;
      }
    }
  }
}
</style>
