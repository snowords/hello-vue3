<template></template>

<script>
export default {
  name: "mixins-test-main",
  components: {},
  props: {},
  data() {
    return {
      mixinData: "mixin中的变量",
    };
  },
  methods: {
    mixinFunction() {
      return "我是mixins里面的公共方法";
    },
  },
  mounted() {},
  computed: {},
};
</script>
