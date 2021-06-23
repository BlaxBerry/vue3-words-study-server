<template>
  <div class="mask-work">
    <div class="mask-close-btn shadow-box" @click="closeMasWork">X</div>

    <div class="mask-content shadow-box">
      <!-- left / top side -->
      <div class="work-text-box">
        <div class="mask-work-name">{{ workData.name }}</div>
        <br />

        <div class="mask-work-desc">
          <p>{{ workData.desc }}</p>
        </div>
        <br />

        <div class="mask-work-links">
          <h4>Links</h4>
          <a :href="workData.github">——>GitHub Code!!!</a><br />
          <a :href="workData.website">——>Demo!!!</a>
        </div>
        <br />

        <div class="mask-work-techtask">
          <h4>Tech Stack</h4>
          <ul v-for="(item, index) in workData.techStack" :key="index">
            <li>- {{ item }}</li>
          </ul>
        </div>
        {{ workData }}
      </div>
      <br />

      <!-- right / bottom -->
      <div class="work-imgs-box">
        <div class="mask-work-small-imgs-list">
          <img
            :src="item"
            alt=""
            v-for="(item, index) in workData.pics"
            :key="index"
            class="mask-work-samll-img"
            @click="clickSmallPic(item)"
          />
        </div>

        <div class="mask-work-big-img">
          <img :src="workData.mianPic" alt="" />
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
      smallPicSr: "",
    };
  },
  methods: {
    // click to close the mask blcok of work data
    closeMasWork() {
      this.$parent._data.maskFlag = false;
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

    // left / top side
    .work-text-box {
      width: 40%;
      overflow-wrap: break-word;
    }
    // right / bottom
    .work-imgs-box {
      width: 60%;
    }

    // 上部 小图列表
    .mask-work-small-imgs-list {
      display: flex;
      padding: 0.5rem;
      .mask-work-samll-img {
        width: 8rem;
        margin: 0.5rem;
        cursor: pointer;
      }
    }
  }
}
</style>
