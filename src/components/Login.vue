<script>
export default {
  name: 'Login',
  data: () => ({
    visible: false,
    email:'',
    password:'',
    emailRules:[
      (v) => !!v || 'Email required',
    ],
    passwordRules:[
      (v)=> !!v || 'Password required'
    ]
  })
}
</script>

<template>
  <div style="display: flex;justify-content: center;width: 100%;">


    <v-card class="mx-auto pa-12 pb-8" elevation="8" width="600px" rounded="lg">
      <div class="" style="width: 60px;height: 30px;">
      <img class="mx-auto my-6" width="100px" style="position: absolute;top: 10px;left: 250px;"  src="../assets/google.png"></img>
    </div>
    <div style="font-size: 30px;margin-bottom: 20px">Log In</div>
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        :rules="emailRules"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password


      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        :rules="passwordRules"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"

        @click:append-inner="visible = !visible"
      ></v-text-field>
      <div>
        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div><br><br>
      <div>
        <v-btn class="btn-login" size="large" style="position: relative;left: -5px;background-color: rgb(66, 96, 245);" variant="tonal" block> Log In </v-btn>
      </div>
      

      <v-card-text class="text-center">
        <RouterLink
          class="text-blue text-decoration-none"
          
          to="/signup"
        >
          Create New Account <v-icon icon="mdi-chevron-right"></v-icon>
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.v-btn.btn-login{
  color: white;
}

</style>
