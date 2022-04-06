<template>
  <div>
    <h2>学校信息:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "中山中学",
      address: "广东",
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe("toSchool", (msgName, data) => {
      console.log("toSchool执行了", msgName, data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped></style>
