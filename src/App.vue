<template>
  <div id="app" class="container">
    <!-- <nav-bar></nav-bar> -->
    <NavBar></NavBar>
    <div class="col-md-2">
    <MyAside></MyAside>
    </div>

    <div class="col-md-10">
       <router-view></router-view>

    </div>
  </div>
</template>

<script>
import NavBar from './components/nav-bar.vue'
import MyAside from './components/my-aside.vue'
export default {
  components: {
    NavBar,
    MyAside
  }
}
</script>

<style></style>