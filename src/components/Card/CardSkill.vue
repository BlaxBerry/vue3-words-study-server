<template>
  <div class="cardskill-container">
    <!-- card -->
    <div
      class="center-align card-skill"
      v-for="(item, index) in list"
      :key="index"
      @click="clickSkillTag(item)"
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
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    // clicke skill tag jump to SkillDetail page
    clickSkillTag(item) {
      setTimeout(() => {
        // mask 打开
        this.$parent.$parent._data.maskSkillFlag = true;
        // 传递数据给 mask-skill
        this.$parent.$parent._data.cardSkillData = item;
        console.log(item);
        // this.$router.push({
        //   name: "Skills",
        //   params: item,
        // });
        // query can see in URL
        // this.$router.push(`/skills?name=${item.params}&position=${item.desc}`)
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
.cardskill-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card-skill {
    margin: 1rem;
    font-size: 0.3rem;
    cursor: pointer;
    img {
      width: 7rem;
      transition: all 0.5s;
    }
    &:hover {
      img {
        transform: scale(1.15);
      }
    }
  }
}
// 点击后的样式
.card-skill-active-scale {
  transform: scale(1.1);
}
</style>
