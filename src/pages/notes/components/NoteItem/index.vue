<template>
    <div class="note_item">
        <div class="tit">滴血认亲</div>
        <div class="con">
            <p>滴血认亲能成功吗？可靠吗？</p>
            <p>在古代的时候，经常会有滴血人情的场景，但是实际上这是不靠谱的</p>
            <button @click="handleClick">提交</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "NoteItem",
    emits: ["goDetail"],
    setup(_, {emit}) {
        const handleClick = () => {
            // emit("goDetail", {
            //     name:  "Nicholas Zakas",
            //     age: 12
            // });
            emit("goDetail", "我是子组件");
        }
        return {
            handleClick
        }
    }
}
</script>

<style>
.note_item {}
</style>