<template>
  <div id="title" @click="checkname">
    <!-- Route Name 页面标题-->
    <!-- <h1 class="title1">{{ this.$route.name }}</h1> -->
    <slot name="pageTitle"></slot>

    <!-- session title1 主标题-->
    <slot name="title1"></slot>

    <!-- session title2 副标题-->
    <slot name="title2"></slot>

    <!-- session title3 分类标题-->
    <slot name="title3"></slot>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    checkname() {
      // let parentName = this.$parent.$el.className;
      // parentName[0].toUpperCase
      // console.log(parentName);
    },
  },
};
</script>

<style lang="less" scoped></style>
