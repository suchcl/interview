<template>
    <div>
        <h3>{{ info }}</h3>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

    export default {
        setup(){
            const info = ref("footer");
            return {
                info
            };
        }
    }
</script>