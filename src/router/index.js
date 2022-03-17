import { createRouter, createWebHistory } from "vue-router";
import FilmView from "@/views/FilmView";
import NowplayingView from "@/views/film/NowplayingView";
import ComingsoonView from "@/views/film/ComingsoonView";
import CinemaView from "@/views/CinemaView";
import ConsultView from "@/views/ConsultView";
import MyView from "@/views/MyView";
import DetatilView from "@/views/DetatilView";
import BuyView from "@/views/BuyView";
const routes = [
  {
    path: "/film",
    name: "Film",
    component: FilmView,
    children: [
      {
        path: "nowplaying",
        name: "Nowplaying",
        component: NowplayingView,
      },
      {
        path: "comingsoon",
        name: "Comingsoon",
        component: ComingsoonView,
      },
      {
        // 当在浏览器地址栏输入http://localhost:8080/film，默认显示二级路由nowplaying
        path: "",
        redirect: "/film/nowplaying",
      },
    ],
  },
  {
    path: "/cinema",
    name: "Cinema",
    component: CinemaView,
  },
  {
    path: "/consult",
    name: "Consult",
    component: ConsultView,
  },
  {
    path: "/my",
    name: "My",
    component: MyView,
  },
  {
    path: "/detatil",
    name: "detatil",
    component: DetatilView,
  },
  {
    path: "/buy",
    name: "buy",
    component: BuyView,
  },

  {
    // 如果输入的路径跟上面的路径都不匹配,就默认显示/login对应的组件
    path: "/:catchAll(.*)",
    redirect: "/film",
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active", //高亮显示默认的样式类名是active
  routes,
});
//全局路由守卫当进行路由跳转前会执行这个函数
// router.beforeEach((to,from,next) => {
//   //to表示跳转到哪个路由
//   //from表示从哪个路由跳过来的
//   console.log(to.path,from.path)
//   //调用next方法就会真的跳转到to对应的路由去
//   if(to.path === '/login') {
//     next()
//   } else {//如果不是跳转到login页面，就强制让你跳到登录页面去
//     next('/login')
//   }
// })

export default router;
