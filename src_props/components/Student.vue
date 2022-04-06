<template>
  <div>
    <h2>学生信息:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ truthAge }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      defaults:99
    }
  },
  data() {
    return {
      dataAge:this.age
    };
  },
  computed:{
    truthAge(){
      return this.dataAge+1
    }
  }
};
</script>

<style scoped></style>
