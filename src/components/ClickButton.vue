<template>
  <button class="button" :class="{ shake: noActiveed }" @click="$emit('enlargeText', 0.1), noActiveed = !noActiveed, $emit('toggleShow')">
    {{ btnMsg }} 
    <slot name="header"></slot>
    <slot>后备插槽</slot>
    <slot name="footer"></slot>
    放大次数: {{ count }}
  </button>  
  <!-- 缩写 -->
  <todo-list v-slot="slotProps">
      <i class="fas fa-ckeck"></i>
      <span class="green">{{ slotProps.item }}</span>
  </todo-list>
  <!-- <todo-list>
    <template v-slot:default="slotProps">
      <i class="fas fa-ckeck"></i>
      <span class="green">{{ slotProps.item }}</span>
    </template>
  </todo-list> -->
</template>

<script>
import TodoList from './TodoList.vue'
export default {
  name: 'ClickButton',
  components: { TodoList },
  props: {
    btnMsg: String,
    count: {
      type: Number,
      default: 0
      }
  },
  emits: ['enlargeText', 'toggleShow'],
  data(){
    return {
      noActiveed: false
    }
  },
  methods: {
    shakeFun(){

    }
  }
}
</script>

<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.button {
  background: #38a775;
  transition: background 0.25s ease-in;
}

.button:hover {
  background: #188856;
  transition: background 0.35s ease-out;
}
</style>