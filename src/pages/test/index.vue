<template>
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
    <div class="info-wrap">
        <p class="info">年龄: {{ uinfo.age }}</p>
        <button class="btn" @click="growUp">过年了</button>
    </div>
    <div class="salary">
        <p class="text">{{ salary }}</p>
        <button class="btn" @click="raise">涨工资了</button>
    </div>
    <div class="double_salary">
        <p class="text">{{ doubleSalary }}</p>
        <button @click="upDoubleSalary">双倍涨薪</button>
    </div>
</template>

<script lang="ts">
import { ref,reactive, computed, watch } from 'vue';
import { data, student, tempData, str, map } from './testData';
import { formatNumber } from "@alg/index";
export default {
    setup() {
        const pageTitle = ref("功能测试页面");
        for (const key in student) {
            console.log('%c [ key ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', key);
        }

        for (const index in tempData) {
            console.log('%c [ index ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', index);
        }

        for (const item of tempData) {
            console.log('%c [ item ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', item.name);
        }

        for (const item of str) {
            console.log('%c [ item ]-33', 'font-size:13px; background:pink; color:#bf2c9f;', item);
        }

        for (const [item] of map) {
            console.log('%c [ item ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', item);
        }
        const nn = formatNumber(123456789.99);
        console.log('%c [ nn ]-45', 'font-size:13px; background:pink; color:#bf2c9f;', nn);


        // 响应式对象
        const uinfo = reactive({ age: 0 });
        const growUp = () => {
            uinfo.age++;
        };

        // 响应式基本值
        const salary = ref(100);
        // 涨工资
        const raise = () => {
            salary.value += 1000;
        };

        const state = reactive({ salary: 2000 });
        const doubleSalary = computed(() => state.salary * 2);

        watch(() => state.salary, (newValue,oldValue) => {
            console.log('%c [ newValue ]-67', 'font-size:13px; background:pink; color:#bf2c9f;', newValue);
            console.log('%c [ oldValue ]-68', 'font-size:13px; background:pink; color:#bf2c9f;', oldValue);
        })

        const upDoubleSalary = () => {
            state.salary *= 2;
        }
        return {
            pageTitle,
            data,
            uinfo,
            growUp,
            salary,
            raise,
            doubleSalary,
            upDoubleSalary
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

.info-wrap {
    display: flex;
    flex-direction: column;
    .info {
        text-align: left;
        padding: 10px 0;
    }
    .btn {
        width: 100px;
    }
}
.double_salary {
    color: #fff;
    background-color: #f20;
}
</style>