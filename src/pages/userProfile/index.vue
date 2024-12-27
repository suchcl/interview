<template>
    <div class="profile">
        {{ message }}
        <br>
        <button class="btn" @click="">详情</button>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";
axios.create({
    timeout: 1000
});
export default {
    name: 'UserProfile',
    setup() {
        const message = ref('用户信息');
        axios.get("/api/user/info").then(res => {
            const data = res.data.data.records;
            console.log('%c [ data ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', data);
        })
        return {
            message
        }
    }
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