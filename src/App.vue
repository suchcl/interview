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
  <h3 class="initial">这是一个初始页面</h3>
</template>

<style scoped>
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
.initial {
  
}
</style>
