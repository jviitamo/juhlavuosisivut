<template>
  <MyNavbar />
  <router-view />
  <MyFooter />
</template>

<script>
import MyNavbar from './components/MyNavbar.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyNavbar,
    MyFooter
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
  background-color: #F2F3F8;
}

@font-face {
  font-family: 'Magra';
  src: url('@/assets/fonts/Magra-Regular.ttf');
}

body { 
  margin: 0;   /* Remove body margins */
}

</style>
