<template>
  <MyNavbar />
  <MainBody />
  <MyFooter />
</template>

<script>
import MyNavbar from './components/MyNavbar.vue'
import MyFooter from './components/MyFooter.vue'
import MainBody from '@/components/MainPage/MainBody.vue';

export default {
  name: 'App',
  components: {
    MyNavbar,
    MyFooter,
    MainBody
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: 'Magra';
  src: url('@/assets/fonts/Magra-Regular.ttf');
}
</style>
