<template>
    <div class="profile">
        {{ message }}
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
    name: 'UserProfile',
    setup() {
        const message = ref('用户信息');
        return {
            message
        }
    }
}
</script>

<style scoped>

</style>