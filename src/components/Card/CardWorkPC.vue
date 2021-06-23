<template>
  <div>
    <ul class="card-work-container">
      <li
        class="card-work"
        v-for="(item, index) in list"
        :key="index"
      >
        <img :src="item.mianPic" alt="" class="shadow-box scale-box"/>
        <div class="card-content">
          <h3 class="center-align"></h3>
          <p class="center-align">{{ item.name }}</p>
          <!-- mask -->
          <div class="mask">
            <!-- link -->
            <div class="center-align">
              <router-link to="/works">Show Works Detail -></router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="less" scoped>
.card-work-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .card-work {
    position: relative;
    width: 320px;
    width: 32rem;
    // background-color: antiquewhite;
    margin: 1rem;
    cursor: pointer;
    .card-content {
      padding: 1rem 0 2rem;
    }
  }
}
</style>
