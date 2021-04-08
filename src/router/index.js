import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import DetailsEmployee from "../views/DetailsEmployee";
import MyPage from "../views/MyPage";
import Employee from "../views/Employee";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/employee/details/:username",
    name: "Employee",
    props: true,
    component: DetailsEmployee,
  },
  {
    path: "/myprofile",
    name: "MyProfile",
    props: true,
    component: MyPage,
  },
  {
    path: "/ggwp",
    name: "try page",
    props: true,
    component: Employee,
  },
  // {
  //   path: "/collaborators/details/:username",
  //   name: "Home",
  //   component: DetailsCollaborator,
  // },

  // // route level code-splitting
  // // this generates a separate chunk (about.[hash].js) for this route
  // // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

export default router;
