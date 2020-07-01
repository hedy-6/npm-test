<template>
  <div>
    <h2>Info~{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    msg: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>