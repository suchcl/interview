import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const Home = () => import("../pages/home/index.vue");
import Dashboard from "../pages/dashboard/index.vue";

const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/dashboard",
        component: Dashboard,
        // 独享路由守卫
        beforeEnter: (to: any, from: any, next: any) => {
            console.log("%c [ from ]-18", "font-size:13px; background:pink; color:#bf2c9f;", from);
            console.log("%c [ to ]-18", "font-size:13px; background:pink; color:#bf2c9f;", to);
            const isAthenticated = localStorage.getItem("token");
            if (!isAthenticated) {
                next("/login");
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // to: 即将进入的路由目标
    // from: 当前导航正要离开的路由
    // next: 调用该方法后，才能进入下一个钩子
    console.log("to", to);
    console.log("from", from);
    const isAuthenticated = localStorage.getItem("token");
    if (to.meta.requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        // 否则继续导航
        next();
    }
    next();
});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
    // 守卫在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
    next();
});

// 全局后置钩子
router.afterEach((to, from) => {
    // 守卫在导航被确认之后，并且路由已经改变，但是还没有渲染任何DOM
    console.log("to", to);
    console.log("from", from);
    window.scrollTo(0, 0);
});

createApp(App).use(router).mount("#app");
