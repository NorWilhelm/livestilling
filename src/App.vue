<template>
  <app-nav-bar />  
  <router-view />
  <footer-bar />
</template>

<script>
// @ is an alias to /src
import navBar from '@/components/navBar.vue'
import footerBar from '@/components/footerBar.vue'

export default {
  name: 'App',
  components: {
    'app-nav-bar': navBar,
    'footer-bar' : footerBar
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
