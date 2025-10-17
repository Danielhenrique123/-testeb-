
import { createRouter, createWebHistory }  from "vue-router";

const routes = [
{

 path: `/`,
 name:`Home`,
 Component: () => import(`../views/MoviesView.vue`),


},

{

 path: `/filmes`,
 name:`Movies`,
 Component: () => import(`../views/MoviesView.vue`),


},
{
  path: `/tv`,
 name:`TV`,
 Component: () => import(`../views/MoviesView.vue`),


},

];

const router = createRouter({
   history: createWebHistory(),
   routes,


});

export default router
