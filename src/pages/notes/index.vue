<template>
    <div class="noteList">
        <div class="title">笔记列表</div>
        <NoteItem @goDetail="handleGoDetail" />
    </div>
</template>

<script lang="ts">
import NoteItem from "./components/NoteItem/index.vue";
    export default {
        components: {
            NoteItem
        },
        setup() {
            const handleGoDetail = (msg: string) => {
                console.log(msg);
            };
            return {
                message: "笔记列表",
                handleGoDetail
            }
        }
    }
</script>

<style>
.noteList {
    color: #fff;
    padding: 20px;
    background-color: blueviolet;
}
</style>