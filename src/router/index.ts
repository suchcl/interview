import { createRouter, createWebHistory } from "vue-router";

// import App from "../App.vue";
import Home from "../pages/home/index.vue";
import List from "../pages/list/index.vue";
import Detail from "../pages/detail/index.vue";
import UserList from "../pages/userList/index.vue";
import UserProfile from "../pages/userProfile/index.vue";
import Test from "../pages/test/index.vue";
import NoteList from "../pages/notes/index.vue";

const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail",
        component: Detail,
    },
    {
        path: "/test",
        component: Test,
    },
    {
        path: "/userList",
        component: UserList,
    },
    {
        path: "/userProfile",
        component: UserProfile,
    },
    {
        path: "/noteList",
        component: NoteList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
