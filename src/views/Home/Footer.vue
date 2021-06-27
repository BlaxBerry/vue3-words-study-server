<template>
  <div class="footer bgkclolr-box session">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Thanks for Watching</h1>
      <h2 slot="title3" class="title3">
        最後までご覧頂き、心より感謝致します
      </h2>
    </Title>

    <!-- desc -->
    <div class="desc">
      <p>
        独自の開発していくうちに、自分の不足も認識しました。
        今後も必ず深く勉強して改善し、そして専門性を高め、
        一流のエンジニアを目指して、引き続き頑張っていきたいと思います。
        <br />
      </p>
      <br />

      <div class="version">
        <a href="https://github.com/BlaxBerry/-Portfolio" target="_blank"
          >Chen's Portfolio <b>Version 3.0</b>
        </a>
      </div>
      <div class="copyright">
        <a href="https://github.com/BlaxBerry" target="_blank"
          >© 2021 BlaxBerry</a
        >
      </div>
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

<style lang="less" scoped>
.footer {
  a {
    font-size: 1rem;
  }
  .version {
    text-align: right;
  }
  .copyright {
    text-align: right;
  }
}
</style>
