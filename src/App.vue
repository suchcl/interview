<template>
  <Layout />
</template>
<script lang="ts">
import Layout from '@/components/layout/index.vue';
import { onMounted } from 'vue';
export default {
  name: 'App',
  components: {
    Layout
  },
  setup() {
    const saveUserName = () => {
      localStorage.setItem("username", "Nicholas Zakas");
    };
    
    onMounted(() => {
      saveUserName();
    });
    return {
      
    }
  }
}
</script>

<style scoped></style>