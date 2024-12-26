<template>
    <div class="timer">
        <h3>提示语:{{ title }},{{ message }}</h3>
    </div>
</template>
<script lang="ts">
export default {
    name: "Welcome",
    props: ["title","message"],
    setup(props) {
        const {title, message} = props;
        return {
            title,
            message
        }
    }
}
</script>