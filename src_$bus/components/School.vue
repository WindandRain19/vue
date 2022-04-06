<template>
  <div>
    <h2>学校信息:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "中山中学",
      address: "广东",
    };
  },
  mounted() {
    this.$bus.$on("toSchool", (data) => {
      console.log("我是School组件，我是收到数据", data);
    });
  },
  beforeDestroy() {
    this.$off("toSchool");
  },
};
</script>

<style scoped></style>
