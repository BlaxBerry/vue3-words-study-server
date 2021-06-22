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
@mainTextColor: #2c3e50;
@mainTextColor-Active: #42b983;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  font-style: italic;
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
</style>
