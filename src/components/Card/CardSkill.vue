<template>
  <div class="cardskill-container">
    <!-- card -->
    <div
      class="center-align card-skill"
      v-for="(item, index) in list"
      :key="index"
    >
      <!-- :src=“” 是字符串形式，所以需要动态拼接，不然会被写死 -->
      <img :src="require(`../../assets/images/${item.picSrc}`)" alt="" />
      <h4>{{ item.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    // clicke skill tag jump to SkillDetail page
    // clickSkillTag(item) {
    //   // console.log(item);
    //   this.$router.push({
    //     name: "Skills",
    //     params: item,
    //   });
    //   // query can see in URL
    //   // this.$router.push(`/skills?name=${item.params}&position=${item.desc}`)
    // },
  },
};
</script>

<style lang="less">
.cardskill-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card-skill {
    padding: 1rem;
    width: 7.5rem;
    font-size: 0.3rem;
    margin: 0.5rem;
    cursor: pointer;
    img {
      transition: all 0.5s;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
