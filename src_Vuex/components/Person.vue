<template>
  <div>
    <h1>人员列表</h1>
    <h4 style="color: red">Count组件的求和为{{ sum }}</h4>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("Person", ["personList"]),
    ...mapState("Count", ["sum"]),
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("Person/ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style></style>
