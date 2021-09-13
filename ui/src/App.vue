<template>
  <div id="app">
    
    <TheSignIn />
  </div>
</template>

<script>
import TheSignIn from './components/layouts/TheSignIn.vue'

export default {
  name: 'App',
  components: {
    TheSignIn
  }
}
</script>

<style>

  * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}


</style>
