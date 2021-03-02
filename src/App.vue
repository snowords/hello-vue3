<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="OK" /> -->
  <ul>
    <li>
      <router-link to="/">去首页</router-link>
    </li>
    <li>
      <router-link to="/hello">去helloworld</router-link>
    </li>
    <li>
      <router-link to="/child/zhangyanhang/posts/410098">去child页面</router-link>
    </li>
    <li>
      <router-link to="/son/snoword">去子组件的Home</router-link>
    </li>
    <li>
      <router-link to="/son/snoword/profile">去子组件的profile</router-link>
    </li>
    <li>
      <router-link to="/son/snoword/posts">去子组件的posts</router-link>
    </li>
  </ul>

  <router-view></router-view>
  
  <input @keyup.enter.exact="submit" @keyup.shift="shiftKey" placeholder="测试回车事件"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    submit(){
      console.log("按下了回车键")
    },
    shiftKey(){
      console.log("按下了shift键")
    }
  }
}
</script>
