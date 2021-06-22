<template>
  <div class="cardskill-container">
    <div
      class="center-align card-skill"
      v-for="(item, index) in skills"
      :key="index"
    >
      <img :src="item.svg" alt="" />
      <h4>{{ item.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skills"],
};
</script>

<style lang="less" scoped>
.cardskill-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card-skill {
    padding: 2rem;
    width: 12rem;
    cursor: pointer;
    &:hover {
      background-color: antiquewhite;
    }
  }
}
</style>
