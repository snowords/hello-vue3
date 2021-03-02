<template>
  <h1>{{ msg }}</h1>
  <!-- <button @click="count++">count is: {{ count }}</button> -->
  <div class="" :style="{ fontSize: postFontSize + 'em' }">待放大文本</div>
  <click-button
    :btnMsg="btnMsg"
    @enlargeText="largerFun"
    @toggleShow="toggleFun"
    :count="count"
  >
    <!-- 具名插槽 -->
    <!-- 缩写 v-slot:header -->
    <template #header>
      <p>具名插槽-header</p>
    </template>
    <template #default> </template>
    <template #footer>
      <p>具名插槽-footer</p>
    </template>
  </click-button>
  <!-- <click-button btnMsg="断水" />
  <click-button btnMsg="谁更牛" /> -->
  <transition name="slide-fade" mode="out-in">
    <p v-if="show">
      Edit <code>components/HelloWorld.vue</code> to test hot module rep components: {
      ClickButton },lacement.
    </p>
  </transition>

  <div id="hoverBox">
    <h3>请把鼠标放在图片上.</h3>
    <main>
      <app-child>
        <img class="img" src="../assets/photo-2.jpg" alt="image of a woman on a train" />
      </app-child>
      <app-child>
        <img
          class="img"
          src="../assets/photo-3.jpg"
          alt="drawing of a woman sharing soda with a zombie"
        />
      </app-child>
    </main>
  </div>

  <button @click="handleMix">调用Mixin</button>

  <div id="dynamic-arguments-example" class="demo full-page">
    <h2>Scroll down the page</h2>
    <input type="range" min="0" max="500" v-model="pinPadding" />
    <p v-pin:[direction]="pinPadding">
      Stick me {{ pinPadding }}px from the {{ direction }} of the page
    </p>
  </div>
</template>

<script>
import ClickButton from "./ClickButton.vue";
import AppChild from "./AppChild.vue";
import Mixin from "../mixins/mixin.vue";

export default {
  name: "HelloWorld",
  components: { ClickButton, AppChild },
  props: {
    msg: String,
  },
  data() {
    return {
      postFontSize: 1,
      btnMsg: "抽刀🔪",
      count: 0,
      show: true,
      direction: "left",
      pinPadding: 200,
    };
  },
  computed: {
    btnMsgCom() {
      return this.postFontSize;
    },
  },
  mixins: [Mixin],
  directives: {
    pin: (el, binding) => {
      el.style.position = "absolute";
      const s = binding.arg || "top";
      el.style[s] = binding.value + "px";
    },
  },
  provide() {
    return {
      user: "John Doe",
      btnMsgLen: this.btnMsgCom,
    };
  },
  methods: {
    largerFun(size) {
      this.postFontSize += size;
      this.count += 1;
      console.log("e====>", this.postFontSize);
    },
    toggleFun() {
      this.show = !this.show;
    },
    handleMix() {
      console.log("Mixin Data ------- ", this.mixinData);
      let mixFun = this.mixinFunction;
      console.log("Mixin Fun ------- ", mixFun);
    },
  },
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

body {
  font-family: "Bitter", serif;
  background: rgb(201, 201, 201);
  color: white;
}

#hoverBox {
  text-align: center;
  margin: 60px;
  margin: 0 auto;
  display: table;
}

button {
  font-family: "Bitter";
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

.img-contain {
  width: 250px;
  height: 160px;
  overflow: hidden;
  transform-origin: 50% 50%;
}

.img {
  width: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s all ease-out;
}

.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  display: block;
  width: 245px;
  height: 155px;
  margin: 5px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s all ease-in;
}

.overlay-text {
  margin-top: 40px;
  color: #fff;
}

h4 {
  margin: 0 0 15px;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transform-origin: 50% 50%;
}

.flip-leave-active {
  transform-origin: 50% 50%;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.full-page {
  height: 100vh;
}
</style>
