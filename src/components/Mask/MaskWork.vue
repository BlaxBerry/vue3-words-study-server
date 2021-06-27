<template>
  <div class="mask-work bgkclolr-box" @click.self="closeMasWork">
    <div class="mask-content shadow-box">
      <!-- close btn -->
      <div class="mask-close-btn shadow-box" @click="closeMasWork">X</div>

      <!-- left / top side -->
      <div class="work-text-box">
        <h2 class="mask-work-name">{{ workData.name }}</h2>
        <br />

        <div class="mask-work-desc">
          <p>{{ workData.desc }}</p>
        </div>
        <br />

        <div class="mask-work-links">
          <h4>Check Links</h4>
          <a :href="workData.github" target="_blank">——>GitHub Code!!!</a><br />
          <a :href="workData.website" target="_blank">——>Demo!!!</a>
        </div>
        <br />

        <div class="mask-work-feature">
          <h4>Function & Descriptoin</h4>
          <ul>
            <li v-for="(item, index) in workData.feature" :key="index">
              <p>
                <b>{{ index + 1 }}.</b> {{ item }}
              </p>
            </li>
          </ul>
        </div>
        <br />

        <div class="mask-work-techtask">
          <h4>Tech Stack</h4>
          <ul>
            <li v-for="(item, index) in workData.techStack" :key="index">
              <p><b> - </b>{{ item }}</p>
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
            <img :src="item" alt="" class="shadow-box"/>
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
      this.$parent._data.maskWorkFlag = false;
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
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-style: normal;
    font-size: 2.5rem;
    border-radius: 50%;
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
    padding: 2rem 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    // left / top side
    .work-text-box {
      padding: 0 2rem;
      width: 40%;
    }
    // right / bottom
    .work-imgs-box {
      display: flex;
      align-content: center;
      width: 55%;
      height: 100%;
      padding: 0.5rem;
    }

    // 上部 小图列表
    .mask-work-small-imgs-list {
      padding-right: 1rem;
      .mask-work-samll-img {
        margin: 0 0 0.5rem;
        cursor: pointer;
        img {
          width: 8rem;
        }
      }
    }
    // 大图
    .mask-work-big-img {
      flex: 1;
    }
  }

  p {
    line-height: 2.6rem;
    font-style: normal;
    // word-wrap: break-word;
    // word-break: break-all;
  }
}
</style>
