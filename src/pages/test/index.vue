<template>
    <div>
        <h3>{{ pageTitle }}</h3>
        <ul class="tit">
            <li class="name">姓名</li>
            <li class="age">年龄</li>
        </ul>
        <ul class="list">
            <li v-for="item in data" key="{item.id}" class="item">
                <div class="name">{{ item.name }}</div>
                <div class="age">{{ item.age }}</div>
            </li>
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

<style scoped>
.tit {
    display: flex;
    font-size: 14px;
    .name {
        width: 120px;
        border: 1px solid #666;
    }
    .age {
        width: 48px;
        border: 1px solid #666;
        border-left: 0;
    }
}
.list {
    display: flex;
    flex-direction: column;
    .item {
        display: flex;
        .name {
            width: 120px;
            border: 1px solid #666;
            border-top: 0;
        }
        .age {
            width: 48px;
            border-right: 1px solid #666;
            border-bottom: 1px solid #666;

        }
    }
}
</style>