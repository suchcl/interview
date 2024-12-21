<template>
    <div>
        <h3>{{ pageTitle }}</h3>
        <ul>
            <li v-for="item in data" key="{item.id}">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { data } from './testData';
export default {
    setup() {
        const pageTitle = ref("功能测试页面");
        
        return {
            pageTitle,
            data
        };
    }
}
</script>

<style scoped></style>