<template>
  <div id="app">
    app
    <Test msg="你好，未来" />
    <Info msg="this is info" />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Info from "./components/Info";

export default {
  name: "App",
  components: {
    Test,
    Info
  }
};
</script>

<style>
</style>
