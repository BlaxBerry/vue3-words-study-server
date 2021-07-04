<template>
  <div id="profile bgkclolr-box blackText ">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">{{ this.$route.name }}</h1>
      <h2 slot="title2" class="title2">プロフィール</h2>
    </Title>

    <!-- about me -->
    <AboutMe></AboutMe>

    <!-- Experience -->
    <div class="experience">
      <!-- title -->
      <Title>
        <h1 slot="title1" class="title1">Experience</h1>
        <h2 slot="title2" class="title2">今までの自分について</h2>
      </Title>
      <!-- list contnet -->
      <ul class="desc experience-list">
        <li
          class="experience-item"
          v-for="(item, index) in profileDatda"
          :key="index"
        >
          <h2 class="year">{{ item.y }}年</h2>
          <ul v-for="(m, mIndex) in item.m" :key="mIndex">
            <h4 class="month" v-if="m.m">- {{ m.m }}月</h4>
            <li v-for="(listItem, listIndex) in m.list" :key="listIndex">
              <p>- {{ listItem }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import AboutMe from "@/views/Profile/AboutMe.vue";
import Title from "@/components/Title/Title.vue";
import Footer from "@/components/Footer/Footer.vue";

// json data
import profileJson from "@/assets/json/profile.json";
const profileDatda = profileJson;

export default {
  data() {
    return {
      profileDatda,
    };
  },
  components: {
    AboutMe,
    Title,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.experience {
  ul.experience-list {
    li.experience-item {
      padding: 1rem 0;
      ul {
        margin-bottom: 1rem;
        li {
          margin: 0.5rem 0;
        }
      }
    }
  }
}
</style>
