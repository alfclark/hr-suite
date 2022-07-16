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
  --green: #7bb0af80;
  --yellow: #eece6f;
  --orange: #da745f;
  --blue: #beddf7;
  --lightBlue: #e4eff8;
  --red: #ffa0a0;
  --carbon: #2b303a;
  --grey: rgb(187, 187, 187);
}
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
