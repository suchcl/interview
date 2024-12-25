
<template>
    <div class="container">
        <Header />
        <div class="siderbar">
            {{ username }}
        </div>
        <div class="center">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>
<script lang="ts">
    import { ref } from 'vue';
    import Header from "../header/index.vue";
    import Footer from "@/components/layout/footer.vue"
    export default{
        name: "Layout",
        components: {
            Header,
            Footer
        },
        setup(){
            const username = ref("layout中的admin");
            return {
                username
            };
        }
    }
</script>
<style scoped>
    
</style>