<template>
  <ul>
    <li v-for="(item, index) in items" :key=index>
      <!-- {{ item }} -->
      <slot :item="item"></slot>
    </li>
  </ul>
  <h3>{{ user }}</h3>
  <h3>{{ btnMsgLen }}</h3>
  <button
    v-for="tab in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab }]"
    @click="currentTab = tab">
    {{ tab }}
  </button>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
  <div id="demo">
    <div @mousemove="xCoordinate"
        :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
        class="movearea">
      <h3>在屏幕上移动鼠标...<span>x: {{x}}</span></h3>
    </div>
  </div>
</template>

<script>
import TabHome from './TabHome.vue'
import TabPosts from './TabPosts.vue'
import TabArchive from './TabArchive.vue'
export default {
  name: 'TodoList',
  components: {
    TabHome,
    TabPosts,
    TabArchive
  },
  inject: ['user', 'btnMsgLen'],
  data() {
    return {
      x: 0,
      items: ['Feed a cat', 'Buy milk'],
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX;
    }
  }
}
</script>

<style>
#demo {
  width: 97vw;
  height: 60px;
}

.movearea {
  position: absolute;
  top: 0;
  left: 0;
  width: 97vw;
  height: 60px;
  padding: 1vmin;
  transition: 0.25s background-color ease;
}
</style>