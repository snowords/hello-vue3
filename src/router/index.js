import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import TabHome from '../components/TabHome.vue'
import AppChild from '../components/AppChild.vue'
import TabPosts from '../components/TabPosts.vue'
import TabArchive from '../components/TabArchive.vue'

// 三个简单的组件
const UserHome = { template: '<h3>Home</h3>' }
const UserProfile = { template: '<h3>Profile</h3>' }
const UserPosts = { template: '<h3>Posts</div>' }
const routes = [
  { path: '/', component: TabHome},
  { path: '/hello', component: HelloWorld },
  { path: '/child/:username/posts/:usercode', component: AppChild },
  // 正则匹配数字
  { path: '/:orderId(\\d+)',component: TabPosts },
  { 
    path: '/son/:id',
    component: TabArchive, 
    children: [
      { path: '', component: UserHome },
				
      { path: 'profile', component: UserProfile },

      { path: 'posts', component: UserPosts }
    ]
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})