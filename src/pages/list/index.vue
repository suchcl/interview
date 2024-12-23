<template>
    <div>
        <h3>list 列表页面</h3>
        <img class="pic" :src="imgSrc" :alt="imgAlt">
        <form @submit.prevent="handleSubmit">
            <ul class="ul-list">
                <li>
                    <label for="username">姓名:</label>
                    <input type="text" id="username" v-model="username">
                </li>
                <li>
                    <label for="age">年龄:</label>
                    <input type="text" id="age" v-model="age">
                </li>
            </ul>
            <button type="submit">提交</button>
        </form>
        <ul class="user-info">
            <li>姓名: {{ username }}</li>
            <li>年龄: {{ age }}</li>
        </ul>
    </div>
    <div class="login" v-if="isLogined">登录</div>
    <div class="login" v-show="isLogined">登录v-show</div>
    <button @click="login">去登录</button>
</template>

<script lang="ts">
    import { ref } from 'vue';
    export default{
        setup(){
            const imgSrc=ref("/images/i1.png");
            const imgAlt = ref("我的自定义alt")
            const username = ref("");
            const age = ref("");
            let isLogined = ref(false);
            
            const handleSubmit = () => {
                const user = {
                    username: username.value,
                    age: age.value
                };
                console.log('%c [ user ]-36', 'font-size:13px; background:pink; color:#bf2c9f;', user);
            }
            const login = () => {
                isLogined.value = !isLogined.value;
            };
            return {
                imgSrc,
                imgAlt,
                username,
                age,
                isLogined,
                login,
                handleSubmit
            };
        }
    }
</script>

<style scoped>
.pic {
    width: 300px;
    height: 400px;
}
</style>