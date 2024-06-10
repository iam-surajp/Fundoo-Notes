<script>
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import ForgotPassword from './components/forgotPassword.vue'
import ResetPassword from './components/resetPassword.vue'
import dashboard from './components/dashboard.vue'

export default {
  name: 'App',
  components: {
    Login,
    SignUp,
    ForgotPassword,
    ResetPassword,
    dashboard
  }
}
</script>

<template>
  <RouterView />
</template>
