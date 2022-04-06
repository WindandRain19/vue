<template>
  <div>
    <h2>学校信息:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">把学校名传个APP</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name:"中山中学",
      address:"广东"
    };
  },
  methods:{
    sendSchoolName(){
      this.$emit('getSchool',this.name)
    }
  }
};
</script>

<style scoped></style>
