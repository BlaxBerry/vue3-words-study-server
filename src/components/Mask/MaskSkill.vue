<template>
  <div class="mask-skill">
    <div class="mask-close-btn shadow-box" @click="closeMasWork">X</div>

    <div class="mask-content">
      <!-- Techs -->
      <div class="skill-techs">
        <ul>
          <li class="center-align">
            <img
              :src="require(`../../assets/images/${skillData.picSrc}`)"
              alt=""
            />
            <h4>{{ skillData.name }}</h4>
          </li>
          <li
            v-for="(item, index) in skillData.techs"
            :key="index"
            class="center-align"
          >
            <img :src="require(`../../assets/images/${item.tagPic}`)" alt="" />
            <h4>{{ item.name }}</h4>
          </li>
        </ul>
      </div>

      <!-- Desc -->

      <!-- Title -->
      <h4 class="title3">- この技術を使う作成品 -</h4>
      <br />

      <!-- Works PC -->
      <div class="skill-works">
        <p>{{ skillData.worksDesc }}</p>
        <br />
        <ul>
          <li v-for="(item, index) in skillData.worksPC" :key="index">
            <!-- work pic -->
            <div class="work-pic">
              <img
                :src="item.mianPic"
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

      <!-- Works Mobile-->

      <!-- more -->
      <h4 class="title3">
        - Check More-
        <br />
        <a href="https://github.com/BlaxBerry" target="_blank">on Github</a>
      </h4>
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
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          width: 6.5rem;
          margin: 0 .5rem;
        }
        h4 {
          font-size: 1.3rem;
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
