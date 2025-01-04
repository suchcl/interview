<template>
    <div class="home">
        <h3>{{ title }}</h3>
        <p v-for="item in terms" key="item.id">{{ item.text }}</p>
    </div>
</template>

<script setup lang="ts">
// <h3>和<p>标签分别组成了不同的块，vue3可以分别处理它们的更新，如title的变更则只会重新渲染h3标签，而p标签的更新则只会重新渲染p标签
import { ref, reactive } from 'vue';
const title = ref("Home ");
const terms = reactive([
    {
        id: 1,
        text: "Item 1"
    },
    {
        id: 2,
        text: "Item 2"
    }
]);
</script>

<style scoped></style>