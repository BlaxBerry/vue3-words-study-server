<template>
  <div>
    <ul class="card-work-container">
      <li class="card-work" v-for="(item, index) in list" :key="index">
        <img
          :src="item.mianPic"
          alt=""
          class="shadow-box scale-box grayscale-img"
          @click="clickCard(item)"
        />
        <div class="card-content">
          <h3 class="center-align"></h3>
          <p class="center-align">{{ item.name }}</p>
          <!-- link -->
          <div class="center-align">
            <a href="javascript:;" @click="clickCard(item)">Show More Detail</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  methods: {
    // click card send data to Home Component and change mask block falg
    clickCard(item) {
      // console.log(item);
      this.$parent.$parent._data.cardWorkData = item;
      // console.log(this.$parent.$parent._data.cardWorkData);
      this.$parent.$parent._data.maskWorkFlag = true;
    },
  },
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
