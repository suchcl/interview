<template>
    <div class="noteList">
        <div class="title">笔记列表</div>
        <NoteItem @goDetail="handleGoDetail" />
        <Button ref="btnRef" />
        <button @click="handleClick">父组件中的按钮</button>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import NoteItem from "./components/NoteItem/index.vue";
import Button from "./components/Button/index.vue";

export default {
    components: {
        NoteItem,
        Button
    },
    setup() {
        const btnRef = ref(null);
        const handleGoDetail = (msg: string) => {
            console.log(msg);
        };
        const handleClick = () => {
            console.log('%c [  ]-26', 'font-size:13px; background:pink; color:#bf2c9f;', "0000000");
            if(btnRef.value){
                btnRef.value.buttonClick();
            }else {
                console.log('%c [  ]-31', 'font-size:13px; background:pink; color:#bf2c9f;', "子组件尚未被使用");
            }
        }
        return {
            message: "笔记列表",
            handleGoDetail,
            handleClick
        };
    },
};
</script>

<style>
.noteList {
    color: #fff;
    padding: 20px;
    background-color: blueviolet;
}
</style>
