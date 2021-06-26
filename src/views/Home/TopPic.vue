<template>
  <div class="top">
    <!-- card -->
    <div class="top-card glass-box session">
      <!-- title -->
      <Title>
        <h1 slot="title1" class="title1">Wellcome</h1>
      </Title>
      <!-- text -->
      <div class="top-card-text">
        <b>
          <vue-typer
            :text="[
              'Hello, I am Chen.\nan enthusiastic guy dreaming to be a great IT Enginner.\nLove Coding Love black screen, Learing Fighting everyday.',
            ]"
            class="top-text"
            :repeat="0"
            :preTypeDelay="1000"
            :typeDelay="100"
            :preEraseDelay="5000"
            :eraseDelay="2000"
          ></vue-typer>
        </b>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";
// import ContactLinks from "@/components/ContactLinks/ContactLinks.vue";
export default {
  components: {
    Title,
    // ContactLinks,
  },
};
</script>

<style lang="less" scoped>
.top {
  height: 100vh;
  width: 100%;
  background: url(../../assets/images/bgk01.jpg) center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  .top-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem;
    height: 22rem;
    min-height: 22rem;
    // title
    #title {
      position: absolute;
      top: -9rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      padding: 0 !important;
      color: white;
      h1 {
        font-size: 6rem;
      }
    }
    // texte
    .top-card-text {
      width: 100%;
      padding: 1rem;
      z-index: 2;
      b {
        min-height: 10rem;
        font-style: normal;
        font-size: 2rem;
        font-style: italic;
      }
    }
  }
}
</style>
