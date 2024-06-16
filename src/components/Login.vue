<script>
import {loginUser} from '../services/UserServices'
export default {
  name: 'Login',
  
  data: () => ({
    valid:false,
    visible: false,
    email:'',
    password:'',
    emailRules:[
      (v) => !!v || 'Email required',
    ],
    passwordRules:[
      (v)=> !!v || 'Password required'
    ],
    showPasswords:false,
    snackbar: {
      show: false,
      message: '',
      timeout: 3000
    }
  }),
  methods:{
   async validate(){
       if (this.valid){
        const reqData = {
          'email':this.email,
          'password':this.password
        }
        loginUser(reqData)
        .then(response => {
            if (response && response.status >= 200 && response.status < 300) {
              this.snackbar.message = 'Login successfull!'
              this.snackbar.color = 'success'
              this.snackbar.show = true
              console.log(response.data); 
              this.$router.push('/home/getallnotes')
            } else {
              this.snackbar.message = 'Login failed'
              this.snackbar.color = 'error'
              this.snackbar.show = true
              console.log('This is status====->',response.status)
              console.error(response);
            }
          })
          .catch(error => {
            this.snackbar.message = "There's some error, please try again later"
            this.snackbar.color = 'error'
            this.snackbar.show = true
            console.error(error);
          });
       }
    } 
}
}
</script>

<template>
  <div class="parent-div">

    <v-form  v-model="valid">
    <v-card class="mx-auto pa-10 pb-4" elevation="8" width="600px" rounded="lg">
      <div id="google-img">
      <img width="100px" src="../assets/google.png"></img>
    </div>
    <div style="font-size: 30px;margin-bottom: 20px">Sign In</div>
     
      <v-text-field
        placeholder="Email address"
        :rules="emailRules"
        label="Email or phone"
        variant="outlined"
        v-model="email"
      ></v-text-field>
       <br>
      <div class="password">
        <v-text-field
          placeholder="Enter your password"
          :rules="passwordRules"
          label="Password"
          variant="outlined"
          v-model="password"
          :type="showPasswords ? 'text' : 'password'"
          @click:append="showPasswords = !showPasswords"
        ></v-text-field>
        <v-checkbox label="Show password" v-model="showPasswords"></v-checkbox>
    </div><br>

      <div class="buttons-div">
        <div>
        <RouterLink
          class="forgot-pass"
          to="/forgotpassword"
          color="rgb(black,black,black)"
        >
          Forgot password?</RouterLink
        >
        </div>

        <div>
          <v-btn class="btn-login" size="large" @click="validate" variant="tonal" :disabled="!valid"> Log In </v-btn>
        </div>
      </div>
      <br><br>
    </v-card>
  </v-form>
      <!-- Snackbar -->
      <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
      {{ snackbar.message }}
    </v-snackbar>
  </div>
</template>

<style scoped>

.parent-div{
  display: flex;
  justify-content:
  center;width: 100%;
  position: relative;
  left: 300px;
  top: 50px
}

#google-img{
  width: 100%;
  height: 30px;
  text-align: center;
}

.v-btn.btn-login{
  color: white;
  background-color: rgb(41, 85, 217);
  text-transform: capitalize;
}

.password{
  display: flex;
  flex-direction: column;
}

.buttons-div{
  display: flex;
  justify-content: space-between;
}

.forgot-pass{
  color: rgb(41, 85, 217);
}

@media screen and (max-width:600px){
  .parent-div{
    width: fit-content;
    left: 0;
  }


}


</style>
