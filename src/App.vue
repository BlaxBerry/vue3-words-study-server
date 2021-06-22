<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->

    <router-view />
  </div>
</template>

<style lang="less">
@import url("./assets/less/main.less");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: @mainTextColor;

//     &.router-link-exact-active {
//       color: @mainTextColor-Active;
//     }
//   }
// }

@import url("./assets/less/MediaQuery.less");
</style>
