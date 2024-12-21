import { createRouter, createWebHistory } from "vue-router";

// import App from "../App.vue";
import Home from "../pages/home/index.vue";
import List from "../pages/list/index.vue";
import Detail from "../pages/detail/index.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;