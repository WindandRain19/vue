<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ bigSum }}</h3>
    <h3>省：{{ address }}-------学校：{{ school }}</h3>
    <h4 style="color: red">下方组件的总人数是{{ personList.length }}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="INCREMENT(n)">+</button>
    <button @click="DECREMENT(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数才加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState("Count", ["sum", "address", "school"]),
    ...mapState("Person", ["personList"]),
    ...mapGetters("Count", ["bigSum"]),
  },
  methods: {
    //   因为在dispatch时候没有任何的逻辑判断或者数据库请求，可以直接commit
    // increment() {
    //   this.$store.commit("INCREMENT", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },

    ...mapMutations("Count", ["INCREMENT", "DECREMENT"]),

    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);
    // },

    ...mapActions(["incrementOdd", "incrementWait"]),
  },
};
</script>

<style></style>
