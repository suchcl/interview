<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Home from "./pages/home/index.vue";
</script>

<template>
  <ul>
    <li>
      <RouterLink to="/home">首页</RouterLink>
    </li>
    <li>
      <RouterLink to="/list">列表页</RouterLink>
    </li>
  </ul>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
