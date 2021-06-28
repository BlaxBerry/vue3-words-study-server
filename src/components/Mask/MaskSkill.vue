<template>
  <div class="mask-skill bgkclolr-box" @click.self="closeMasWork">
    <div class="mask-content">
      <!-- close btn -->
      <div class="mask-close-btn shadow-box" @click="closeMasWork">X</div>

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
      <br />

      <!-- Desc -->
      <div class="skill-desc">
        <ul>
          <li v-for="(item, index) in skillData.desc" :key="index">
            <p><b>-</b> {{ item }}</p>
          </li>
        </ul>
      </div>
      <br />

      <!-- Title -->
      <h4 class="title3" v-if="skillData.worksPC || skillData.worksMobile">
        - Example Demo -
      </h4>
      <br />

      <!-- Works PC -->
      <div class="skill-works-pc" v-if="skillData.worksPC">
        <div class="skill-works-desc">
          <p>{{ skillData.worksDesc }}</p>
        </div>
        <br />
        <!-- pics -->
        <ul>
          <li v-for="(item, index) in skillData.worksPC" :key="index">
            <div class="work-pic">
              <!-- pic -->
              <img
                :src="item.mianPic"
                alt=""
                class="shadow-box scale-box"
                @click="clickCard(item)"
              />
              <!-- mask -->
              <div class="links-mask center-align">
                <!-- <p>{{ item.name }}</p> -->
                <a :href="item.github" @click="clickCard(item)" target="_blank"
                  >Github Demo</a
                >
              </div>
            </div>
            <!-- name -->
            <p class="mask-work-name">{{ item.name }}</p>
          </li>
        </ul>
      </div>

      <!-- Works Mobile-->
      <div class="skill-works-mobile" v-if="skillData.worksMobile">
        <ul>
          <li v-for="(item, index) in skillData.worksMobile" :key="index">
            <div class="mobile-pic">
              <!-- pic -->
              <img :src="item.mianPic" alt="" class="shadow-box scale-box" />
              <!-- mask -->
              <div class="links-mask center-align">
                <!-- <p>{{ item.name }}</p> -->
                <a :href="item.github" @click="clickCard(item)" target="_blank"
                  >Github Demo</a
                >
              </div>
            </div>
            <!-- name -->
            <p class="center-align">{{ item.name }}</p>
          </li>
        </ul>
      </div>

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
          margin: 0 0.8rem;
          img {
            width: 6rem;
          }
          h4 {
            font-size: 1.3rem;
          }
        }
      }
    }

    .skill-desc {
      ul {
        li {
          padding: 0 1rem;
        }
      }
    }

    // pic works
    .skill-works-pc {
      .skill-works-desc {
        p {
          width: 90%;
          margin: 0 auto;
        }
      }
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
          // card
          .work-pic {
            position: relative;
            // mask
            .links-mask {
              position: absolute;
              bottom: 0.5rem;
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
          }
          &:hover {
            .links-mask {
              transform: scale(1);
            }
          }
        }
        p {
          line-height: 1.5;
        }
      }
    }

    // mobile works
    .skill-works-mobile {
      ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        li {
          margin: 1rem 2rem;
          width: 20%;
          cursor: pointer;
          // card
          .mobile-pic {
            position: relative;
            // mask
            .links-mask {
              position: absolute;
              bottom: 0;
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
          }
          &:hover {
            .links-mask {
              transform: scale(1);
            }
          }
        }
        p {
          line-height: 1.5;
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
  .mask-work-name {
    text-align: center;
    font-style: italic;
    line-height: 1.6rem;
  }
}
</style>
