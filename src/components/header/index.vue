<template>
    <div class="menu">
        <ul class="nav">
            <li>
                <RouterLink to="/home">首页</RouterLink>
            </li>
            <li>
                <RouterLink to="/list">列表页</RouterLink>
            </li>
            <li>
                <router-link to="/test">功能测试页面</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        return {
        };
    }
}
</script>