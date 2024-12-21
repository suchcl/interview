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
import { data, student, tempData, str, map } from './testData';
export default {
    setup() {
        const pageTitle = ref("功能测试页面");

        for(const key in student){
            console.log('%c [ key ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', key);
        }

        for(const index in tempData){
            console.log('%c [ index ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', index);
        }

        for (const item of tempData) {
            console.log('%c [ item ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', item.name);
        }

        for (const item of str) {
            console.log('%c [ item ]-33', 'font-size:13px; background:pink; color:#bf2c9f;', item);
        }

        for(const [item] of map){
            console.log('%c [ item ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', item);
        }
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