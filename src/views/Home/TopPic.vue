<template>
  <div class="top">
    <!-- card -->
    <div class="top-card glass-box desc">
      <!-- title -->
      <Title>
        <h1 slot="title1" class="title1">Wellcome</h1>
      </Title>
      <!-- text -->
      <div class="top-card-text">
        <b>
          <vue-typer
            :text="[
              'Hello, I am Chen.\nan enthusiastic guy dreaming to be a IT Enginner.\nLove Coding Love black screen, Learing Fighting everyday.',
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
  position: relative;
  // for ios cannot read background-attachement
  &&:after {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: url(../../assets/images/bgk01.jpg) center no-repeat;
    background-size: cover;
  }

  .top-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem;
    height: 27rem;
    min-height: 27rem;
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 4rem;
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
