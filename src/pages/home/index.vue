<template>
    <div class="home">
        <h3>{{ title }}</h3>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script setup lang="ts">
// 当title改变时，补丁标记可以标识出这是一处“文本更新”，而不是解析整个组件，这样可以更高效的进行DOM更新
import { ref } from 'vue';
const title = ref("Home ");
const changeTitle = () => {
    title.value = "Home Page";
};
</script>

<style scoped></style>