<template>
    <div>
        <h3>list 列表页面</h3>
        <img class="pic" :src="imgSrc" :alt="imgAlt">
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    export default{
        setup(){
            const imgSrc=ref("/images/i1.png");
            const imgAlt = ref("我的自定义alt");
            return {
                imgSrc,
                imgAlt
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