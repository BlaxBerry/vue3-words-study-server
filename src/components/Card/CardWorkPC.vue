<template>
  <div>
    <ul class="card-work-container">
      <li class="card-work" v-for="(item, index) in list" :key="index">
        <div class="card-content">
          <div class="center-align">
            <img
              :src="item.mianPic"
              alt=""
              class="shadow-box scale-box grayscale-img"
              @click="clickCard(item)"
            />
            <div class="mask">
              <a href="javascript:;" @click="clickCard(item)"
                >Show More Detail</a
              >
            </div>
          </div>
        </div>
        <p class="center-align">{{ item.name }}</p>
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
      setTimeout(() => {
        // console.log(item);
        this.$parent.$parent._data.cardWorkData = item;
        // console.log(this.$parent.$parent._data.cardWorkData);
        this.$parent.$parent._data.maskWorkFlag = true;
      }, 100);
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
      position: relative;
      padding: 1rem 0 2rem;
      .mask {
        position: absolute;
        bottom: 3rem;
        left: 0;
        right: 0;
        width: 100%;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.8);
        transform: scale(0);
        transition: all 1s;
        a {
          color: white;
        }
      }
      &:hover {
        .mask {
          transform: scale(1);
        }
      }
    }
  }
}
</style>
