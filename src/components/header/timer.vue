<template>
    <div class="timer">
        <h3>{{ message }}</h3>
    </div>
</template>
<script lang="ts">
import { defineProps } from 'vue';
export default {
    name: "Timer",
    setup() {
        const props = defineProps({
            message: {
                type: String,
                required: true,
            }
        });

        console.log('%c [ props ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', props);
        return {
            message: props.message
        }
    }
}
</script>