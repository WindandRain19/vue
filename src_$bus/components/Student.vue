<template>
  <div>
    <h2>学生信息:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <button @click="sendStudentName">把学生名传给School</button>
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
    sendStudentName(){
      this.$bus.$emit('toSchool',this.name)
    }
  },
};
</script>

<style scoped></style>
