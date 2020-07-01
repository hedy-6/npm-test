<template>
  <div>
    <h2>Hello~{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    msg: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>