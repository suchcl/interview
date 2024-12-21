import { createRouter, createWebHistory } from "vue-router";

// import App from "../App.vue";
import Home from "../pages/home/index.vue";
import List from "../pages/list/index.vue";
import Detail from "../pages/detail/index.vue";
import Test from "../pages/test/index.vue";

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/list",
        component: List
    },
    {
        path: "/detail",
        component: Detail
    },
    {
        path: "/test",
        component: Test
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;