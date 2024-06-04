import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ProductList from '@/components/ProductList.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import ProductCreate from '@/pages/ProductCreate.vue';
import ProductEdit from '@/pages/ProductEdit.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';

import { isAuthenticated } from '@/utils/auth';

const routes = [
  { path: '/', component: Home },
  { 
    path: '/products', 
    component: ProductList, 
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/login');
      }
    } 
  },
  { path: '/products/:id', component: ProductDetail }, // Rute ini cocok dengan pola /products/:id
  { 
    path: '/create', 
    component: ProductCreate, 
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/login');
      }
    } 
  },
  { 
    path: '/edit/:id', 
    component: ProductEdit, 
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/login');
      }
    } 
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/detail/:id', component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

