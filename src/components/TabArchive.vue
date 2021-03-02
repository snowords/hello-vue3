<template>
  <div class="demo-tab">Archive Component</div>  

    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'TabArchive'
}
</script>

<style>

</style>