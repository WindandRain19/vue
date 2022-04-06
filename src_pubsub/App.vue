<template>
  <div>
    <h1>{{ msg }}</h1>
    <Student />
    <hr />
    <School />
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
};
</script>

<style scoped></style>
