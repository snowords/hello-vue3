<template>
  <div class="img-contain">
  	<div class="overlay">
    	<p class="overlay-text">我不喜欢这个图片</p>
      <button @click="toggleShow">替换!</button>
  	</div>
    <transition name="flip" mode="out-in">
      <div v-if="!isShowing">
        <slot></slot>
      </div>
      <img class="img" v-else src='../assets/photo-1.jpg' alt=''>
    </transition>
  </div>
  <h3>Child 页面</h3>
  <div class="">路由带参数1：{{ username }}</div>
  <div class="">路由带参数2：{{ usercode }}</div>
</template>
<script>
export default {
  name: 'AppChild',
  data() {
    return {
      isShowing: false
    }
  },
  computed: {
    username() {
      return this.$route.params.username
    },
    usercode() {
      return this.$route.params.usercode
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
}
</script>
