<template>
  <div class="mask-work">
    <div class="mask-close-btn shadow-box" @click="closeMasWork">X</div>

    <div class="mask-content shadow-box">
      <!-- left / top side -->
      <div class="work-text-box">
        <h2 class="mask-work-name">{{ workData.name }}</h2>
        <br />

        <div class="mask-work-desc">
          <p>{{ workData.desc }}</p>
        </div>
        <br />

        <div class="mask-work-links">
          <h4>Links</h4>
          <a :href="workData.github" target="_blank">——>GitHub Code!!!</a><br />
          <a :href="workData.website" target="_blank">——>Demo!!!</a>
        </div>
        <br />

        <div class="mask-work-feature">
          <h4>Function</h4>
          <ul>
            <li v-for="(item, index) in workData.feature" :key="index">
              {{ index + 1 }}. {{ item }}
            </li>
          </ul>
        </div>
        <br />

        <div class="mask-work-techtask">
          <h4>Tech Stack</h4>
          <ul>
            <li v-for="(item, index) in workData.techStack" :key="index">
              - {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <br />

      <!-- right / bottom -->
      <div class="work-imgs-box">
        <ul class="mask-work-small-imgs-list">
          <li
            v-for="(item, index) in workData.pics"
            :key="index"
            @click="clickSmallImg(item)"
            class="mask-work-samll-img"
          >
            <img :src="item" alt="" />
          </li>
        </ul>

        <div class="mask-work-big-img">
          <a :href="workData.website" target="_blank">
            <img
              :src="smallPicSr == '' ? workData.mianPic : smallPicSr"
              alt=""
              class=" shadow-box"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["workData"],
  data() {
    return {
      // 点击samll Img 后获得的url
      smallPicSr: "",
    };
  },
  methods: {
    // click to close the mask blcok of work data
    closeMasWork() {
      this.$parent._data.maskFlag = false;
    },
    // click small img of list  tab change big img src
    clickSmallImg(item) {
      // console.log(item);
      this.smallPicSr = item;
    },
  },
};
</script>

<style lang="less" scoped>
.mask-work {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 222;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .mask-close-btn {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 222;
    width: 2rem;
    background-color: #fff;
    cursor: pointer;
  }
  // mask内容部分
  .mask-content {
    display: flex;
    position: fixed;
    top: 5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 80%;
    height: 80vh;
    background-color: #fff;
    border-radius: 0.5rem;
    overflow-y: scroll;
    padding: 2rem 1.5rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    // left / top side
    .work-text-box {
      width: 40%;
    }
    // right / bottom
    .work-imgs-box {
      width: 55%;
      padding: 0.5rem;
    }

    // 上部 小图列表
    .mask-work-small-imgs-list {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      padding: 0.5rem;
      .mask-work-samll-img {
        width: 8rem;
        margin: 0.5rem;
        cursor: pointer;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
