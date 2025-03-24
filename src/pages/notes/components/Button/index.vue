<template>
    <div>
        <button>按钮子组件</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Button",
    setup() {
        const buttonClick = () => {
            console.log("按钮子组件");
        }
        return {
            buttonClick,
            message: "按钮子组件"
        }
    }
}
</script>