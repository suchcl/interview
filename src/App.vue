<template>
  <Header />
  <RouterView />
  <h3 class="initial">这是一个初始页面</h3>
</template>
<script setup lang="ts">
import Header from "./components/header/index.vue"
</script>
<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 15px;

    a {
      color: #333;

      &:hover {
        color: #f20;
      }

      &.router-link-active {
        color: #f20;
      }
    }
  }
}

.initial {}
</style>
