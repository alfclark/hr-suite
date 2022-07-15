<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "../src/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
:root {
  --green: #459795;
  --yellow: #cfad48;
  --orange: #dc5134;
}
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
