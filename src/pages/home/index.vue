<template>
    <div class="home">
        <h3>首页</h3> <!-- 静态提升 -->
        {{ message }}
        {{ concatStr }}
    </div>
</template>

<script setup lang="ts">
// <h3>首页</h3>是一个静态节点，vue3会在编译的时候识别并提升它，避免在每次渲染时都重新创建
import { ref } from 'vue';
const message = ref('Hello Vue!');

const str1 = "Hello";
const str2 = "World";
const concatStr = `${str1},${str2}`; // 预字符串化
</script>

<style scoped></style>