<script>
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    Login,
    SignUp
  }
}
</script>

<template>
  <RouterView />
</template>
