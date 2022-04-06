<template>
  <div>
    <h1>{{ msg }}</h1>
    <Student ref="student"/>
    <hr />
    <School @getSchool="getSchoolName"/>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "你好啊",
    };
  },
  methods:{
    getStudentName(name){
      console.log("学生名字被调用",name);
    },
    getSchoolName(name){
      console.log("学校名字被调用",name);
    }
  },
  mounted(){
    this.$refs.student.$on("student",this.getStudentName)
  }
};
</script>

<style scoped></style>
