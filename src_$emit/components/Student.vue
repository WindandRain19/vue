<template>
  <div>
    <h2>学生信息:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <button @click="sendStudentName">把学生名传给APP</button>
    <button @click="unbind">解绑student事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 19,
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student实例对象上的student事件
      this.$emit("getStudent", this.name);
    },
    unbind() {
      // 解绑
      this.$off("getStudent");
      // 解绑全部
      // this.$off()
    },
  },
};
</script>

<style scoped></style>
