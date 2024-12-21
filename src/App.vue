<script setup lang="ts">
</script>

<template>
  <ul class="menu">
    <li>
      <RouterLink to="/home">首页</RouterLink>
    </li>
    <li>
      <RouterLink to="/list">列表页</RouterLink>
    </li>
    <li>
      <router-link to="/test">功能测试页面</router-link>
    </li>
  </ul>
  <RouterView />
</template>

<style scoped>
ul,li {
  list-style: none;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin: 0 15px;
    a {
      color: #333;
      &:hover{
        color: #f20;
      }
      &.router-link-active{
        color: #f20;
      }
    }
  }
}
</style>
