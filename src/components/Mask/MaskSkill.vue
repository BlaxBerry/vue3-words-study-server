<template>
  <div class="mask-skill">
    <div class="mask-close-btn shadow-box" @click="closeMasWork">X</div>

    <div class="mask-content">
      <h2 class="mask-work-name">{{ skillData.name }}</h2>
      <br />

      <!-- / -->
      <div class="skill-techs">
        <ul>
          <li>
            <img src="../../assets/images/javascript.svg" alt="" />
          </li>
          <li>
            <img src="../../assets/images/jquery.svg" alt="" />
          </li>
        </ul>
      </div>

      <!-- skill-mask-works-list -->
      <h4>この技術を使う作品</h4>
      <!-- pc -->
      <div class="skill-works">
        <ul>
          <li v-for="(item, index) in skillData.worksPC" :key="index">
            <!-- work pic -->
            <div class="work-pic">
              <img
                :src="item.picSrc"
                alt=""
                class="shadow-box grayscale-img"
                @click="clickCard(item)"
              />
              <!-- work name -->
              <div class="links-mask center-align">
                <p class="center-align">{{ item.name }}</p>
              </div>
            </div>
            <!-- links -->
            <div class="center-align links">
              <a :href="item.github" @click="clickCard(item)" target="_blank"
                >Github</a
              >
              <a :href="item.website" @click="clickCard(item)" target="_blank"
                >Demo</a
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- more -->
      <h4>Check More</h4>
      <a href="https://github.com/BlaxBerry" target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skillData"],
  methods: {
    // click to close the mask blcok of work data
    closeMasWork() {
      this.$parent._data.maskSkillFlag = false;
    },
    // click card
    clickCard(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="less" scoped>
.mask-skill {
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

  .mask-content {
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

    // skill techs pic
    .skill-techs {
      ul {
        li {
          width: 6rem;
        }
      }
    }

    // skill works
    .skill-works {
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        li {
          margin: 0.5rem;
          width: 30%; //////////////////////
          cursor: pointer;
          // links
          .links {
            a {
              margin: 0 0.5rem;
            }
          }
          .work-pic {
            position: relative;
            // mask
            .links-mask {
              position: absolute;
              bottom: 0.5rem;
              left: 0;
              right: 0;
              width: 100%;
              padding: 1px 0;
              background-color: rgba(0, 0, 0, 0.8);
              transform: scale(0);
              transition: all 1s;
              color: white;
            }
          }
          &:hover {
            .links-mask {
              transform: scale(1);
            }
          }
        }
      }
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
