<template>
    <div class="user-item">
        <div class="pic" @click="goProfile">
            <img :src="item.imgUrl" :alt="item.name">
        </div>
        <div class="user-info">
            <div class="name">姓名:{{ item.name }}</div>
            <div class="birthday">生日: {{ item.birthday }}</div>
            <div class="mobile">电话:{{ item.mobile }}</div>
            <div class="email">邮箱:{{ item.email }}</div>
            <div class="address">住址:{{ item.address }}</div>
            <div class="number">{{ num }}</div>
            <div class="btn-area">
                <button @click="changeNumber">修改数字</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent, type PropType, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'UserItem',
    props: {
        item: {
            type: Object as PropType<{ id: number, name: string, birthday: string, mobile: string, email: string, address: string, imgUrl: string }>, // 根据实际的 item 结构定义类型
            required: true
        }
    },
    setup() {
        const router = useRouter();
        const num = ref(0);
        const goProfile = () => {
            router.push("/userProfile");
        }

        onBeforeMount(() => {
            console.log('%c [ 子组件 ]-35', 'font-size:13px; background:pink; color:#bf2c9f;', "子组件 onBeforeMount onBeforeMount");
        });

        onMounted(() => {
            console.log('%c [ 子组件 ]-39', 'font-size:13px; background:pink; color:#bf2c9f;', "子组件 onMounted onMounted");
        });

        onBeforeUpdate(() => {
            console.log('%c [ 子组件 ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', "子组件 onBeforeUpdate onBeforeUpdate");
        });

        onUpdated(() => {
            console.log('%c [ 子组件 ]-47', 'font-size:13px; background:pink; color:#bf2c9f;', "子组件 onUpdated onUpdated");
        });

        onBeforeUnmount(() => {
            console.log('%c [ 子组件 ]-51', 'font-size:13px; background:pink; color:#bf2c9f;', "子组件 onBeforeUnmount onBeforeUnmount");
        });

        onUnmounted(() => {
            console.log('%c [ 子组件 ]-55', 'font-size:13px; background:pink; color:#bf2c9f;', "子组件 onUnmounted onUnmounted");
        });

        const changeNumber = () => {
            num.value++;
        }

        return {
            goProfile,
            num,
            changeNumber
        }
    }
});
</script>

<style scoped>
.user-item {
    display: flex;
    margin-right: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;

    .pic {
        margin-right: 20px;
    }

    .user-info {
        text-align: left;
    }
}
</style>