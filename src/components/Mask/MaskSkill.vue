<template>
  <div class="mask-skill">
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
        <ul v-for="(item, index) in skillData.desc" :key="index">
          <li>
            <p><b>-</b> {{ item }}</p>
          </li>
        </ul>
      </div>
      <br />

      <!-- Title -->
      <h4 class="title3">- Example Demo -</h4>
      <br />

      <!-- Works PC -->
      <div class="skill-works-pc">
        <p>{{ skillData.worksDesc }}</p>
        <br />
        <ul>
          <li v-for="(item, index) in skillData.worksPC" :key="index">
            <!-- work pic -->
            <div class="work-pic">
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
            <!-- work name -->
            <p class="mask-work-name">{{ item.name }}</p>
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

    // skill works
    .skill-works-pc {
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
