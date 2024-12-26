<template>
    <div class="user-item">
        <div class="pic">
            <img src="https://ke-image.ljcdn.com/110000-inspection/d72fdf6d-6425-4d93-9d63-dcef5b87fb8c_1000.jpg!m_fill,w_280,h_210,f_jpg?from=ke.com" alt="">
        </div>
        <div class="user-info">
            <div class="name">姓名:</div>
            <div class="birthday">生日:</div>
            <div class="mobile">电话:</div>
            <div class="email">邮箱:</div>
            <div class="address">住址:</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserItem",
    setup() {
        return {
            message: "用户信息"
        }
    }
}
</script>