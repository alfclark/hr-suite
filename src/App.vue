<template>
  <NavBar />
  <Transition>
    <router-view />
  </Transition>
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
  --grey: #bbbbbb;
}
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* Transiciones router*/
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
