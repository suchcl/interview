<template>
    <div>
        <h3>用户列表</h3>
        <!-- <div v-for="item in userList" :key="item.id">{{ item.name }}</div> -->
        <UserItem v-for="item in userList" :item="item" :key="item.id"></UserItem>
    </div>
</template>

<script lang="ts">
import { ref,onBeforeMount } from "vue";
import UserItem from "./components/userItem.vue";
// import { getTestUserListService } from "@/service/user";
import request from "@/service/request";
export default {
    name: "UserList",
    components:{
        UserItem
    },
    setup() {
        const userList:any = ref([]);
        const getUserList = () => {
            request.get("/uesrs/getTestUserList").then((res) => {
                const data = res.data.data;
                userList.value = data.userList;
            });
        }
        onBeforeMount(() => {
            getUserList()
        });
        return {
            userList,
            message: "用户列表"
        }
    }
}
</script>