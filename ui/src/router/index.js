import Vue from "vue";
import VueRouter from "vue-router";
import TheSignUp from "../components/layouts/TheSignUp.vue";
import TheSignIn from "../components/layouts/TheSignIn.vue";
import TheHomePage from "../components/layouts/TheHomePage.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/sign-up", component: TheSignUp },
    { path: "/", component: TheSignIn },
    { path: "/homepage", name: "HomePage", component: TheHomePage },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;
