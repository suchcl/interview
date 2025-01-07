<template>
    <div class="profile">
        {{ message }}
        <br>
        <button class="btn" @click="getUserDetail">详情</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
axios.create({
    timeout: 1000
});
const message = ref('用户信息');
const getUserDetail = () => {
    axios.get("/api/user/info").then(res => {
        const data = res.data.data.records;
        console.log('%c [ data ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', data);
    })
}
</script>

<style scoped>
.btn {
    color: #fff;
    font-size: 15px;
    padding: 10px 15px;
    background-color: #4096ff;
    border-radius: 10px;
    outline: 0;
}
</style>