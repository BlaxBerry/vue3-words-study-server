<template>
  <div>
    <!-- frondEnd -->
    <div class="front-end">
      <h4 class="title3">Front End</h4>
      <div class="cardskill-container">
        <div class="center-align card-skill">
          <img src="../assets/images/html5.svg" alt="" />
          <h4>html5</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/css3.svg" alt="" />
          <h4>CSS3</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/javascript.svg" alt="" />
          <h4>JavaScript</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/jquery.svg" alt="" />
          <h4>jQuery</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/less.svg" alt="" />
          <h4>Less</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/sass.svg" alt="" />
          <h4>Sass</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/vue.svg" alt="" />
          <h4>Vue</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/react.svg" alt="" />
          <h4>React</h4>
        </div>
      </div>
    </div>
    <!-- server -->
    <div class="server-side">
      <h4 class="title3">Server Side</h4>
      <div class="cardskill-container">
        <div class="center-align card-skill">
          <img src="../assets/images/nodejs.svg" alt="" />
          <h4>Node.js</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/nuxtjs.svg" alt="" />
          <h4>Nuxt.js</h4>
        </div>
      </div>
    </div>
    <!-- data base -->
    <div class="server-side">
      <h4 class="title3">Server Side</h4>
      <div class="cardskill-container">
        <div class="center-align card-skill">
          <img src="../assets/images/mongodb.svg" alt="" />
          <h4>MongoDB</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/postgresql.svg" alt="" />
          <h4>PostgreSQL</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/mysql.svg" alt="" />
          <h4>MySQL</h4>
        </div>
      </div>
    </div>
    <!-- others -->
    <div class="server-side">
      <h4 class="title3">Server Side</h4>
      <div class="cardskill-container">
        <div class="center-align card-skill">
          <img src="../assets/images/git.svg" alt="" />
          <h4>Git</h4>
        </div>
        <div class="center-align card-skill">
          <img src="../assets/images/github.svg" alt="" />
          <h4>Github</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["skills"],
};
</script>

<style lang="less" scoped>
.cardskill-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card-skill {
    padding: 2rem;
    width: 10rem;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: antiquewhite;
    }
  }
}
</style>
