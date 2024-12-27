<template>
    <div class="container">
        <div class="header">
            <Header></Header>
        </div>
        <div class="main">
            <div class="siderbar">

            </div>
            <div class="center">
                <RouterView />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Header from "../header/index.vue";
export default {
    name: "Layout",
    components: {
        Header
    },
    setup() {
        const username = ref("layout中的admin");
        return {
            username
        };
    }
}
</script>
<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 60px;
    color: #fff;
    background-color: #001529;
}

.main {
    display: flex;

    .siderbar {
        width: 300px;
        height: 100vh;
        background-color: #f20;
    }
    .center {
        flex: 1;
        padding-left: 20px;
    }
}
</style>