<script>
import {loginUser} from '../services/UserServices'
export default {
  name: 'Login',
  valid:false,
  data: () => ({
    visible: false,
    email:'',
    password:'',
    emailRules:[
      (v) => !!v || 'Email required',
    ],
    passwordRules:[
      (v)=> !!v || 'Password required'
    ],
    showPasswords:false
  }),
  methods:{
   async validate(){
       if (this.valid){
        const reqData = {
          'email':this.email,
          'password':this.password
        }
        const response = await loginUser(reqData);
        return response
          // console.log('User logged in successfully', response);
          // alert('Login successful');
       }
    } 
}
}
</script>

<template>
  <div class="parent-div">

    <v-form  v-model="valid">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" width="600px" rounded="lg">
      <div style="width: 60px;height: 30px;">
      <img class="mx-auto my-6" width="100px" style="position: absolute;top: 10px;left: 250px;"  src="../assets/google.png"></img>
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
          <v-btn class="btn-login" size="large" @click="validate" variant="tonal"> Log In </v-btn>
        </div>
      </div>
      <br><br>
    </v-card>
  </v-form>
  </div>
</template>

<style scoped>

.parent-div{
  display: flex;
  justify-content:
  center;width: 100%;
  position: relative;
  left: 300px;
}

.v-btn.btn-login{
  color: white;
  position: relative;
  left: -5px;
  background-color: rgb(41, 85, 217);
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

</style>
