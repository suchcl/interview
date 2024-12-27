<template>
    <div class="user-item" @click="goProfile">
        <div class="pic">
            <img :src="item.imgUrl" :alt="item.name">
        </div>
        <div class="user-info">
            <div class="name">姓名:{{ item.name }}</div>
            <div class="birthday">生日: {{ item.birthday }}</div>
            <div class="mobile">电话:{{ item.mobile }}</div>
            <div class="email">邮箱:{{ item.email }}</div>
            <div class="address">住址:{{ item.address }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
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
        const goProfile = () => {
            router.push("/userProfile");
        }
        return {
            goProfile
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