<script>
import { resetPassword } from '@/services/UserServices';

export default {
  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v) ||
        'Use 8 or more characters, numbers & symbols',
    ],
    confirmPassword: '',
    confirmPasswordRules: [
      (v) => !!v || 'Confirm password is required'
    ],
    showPasswords: false,
    snackbar: {
      show: false,
      message: '',
      color: '',
      timeout: 3000,
    },
  }),
  computed: {
    isFormValid() {
      return this.passwordRules.every((rule) => rule(this.password) === true) &&
             this.confirmPasswordRules.every((rule) => rule(this.confirmPassword) === true);
    },
  },
  methods: {
    submitForm() {
      if (this.password != this.confirmPassword) {
          this.snackbar.message = 'Passwords did not match'
          this.snackbar.color = 'error'
          this.snackbar.show = true
        } else{
          
          const reqData = {
            'newPassword': this.password
          }
          resetPassword(reqData)
          .then(res=>{
            console.log(res)
            this.snackbar.message = 'Password changed successfully!'
            this.snackbar.color = 'success'
            this.snackbar.show = true
            this.$router.push('login')
          })
          .catch(error=>{
            console.log(error)
            this.snackbar.message = 'Some error occured'
            this.snackbar.color = 'error'
            this.snackbar.show = true
          })


        }
    },
  },
};
</script>


<template>
    <div class="parent-div">
     
      <v-card class="mx-auto pa-5 pb-8" elevation="8" width="600px" rounded="lg">
        <div class="title-content" style="width: 100%;">
            <div style="height: 60px;text-align: center"><img class="mx-auto my-6" width="100px" src="../assets/google.png"></img></div><br>
            <div style="font-size: 30px;text-align: center">Reset Password</div>
            <div style="font-size: 20px;text-align: center">Recover your google account</div>
        </div>
        <br><br>
        <div class="text-field">
            <v-text-field 
            label="New Password"
            variant="outlined" 
            v-model="password"  
            :rules="passwordRules"  
            ></v-text-field>
        </div>     <br>
        <div class="text-field">
            <v-text-field 
            label="Confirm New Password"
            variant="outlined"   
            v-model="confirmPassword"  
            :rules="confirmPasswordRules"
            ></v-text-field>
        </div>    

         <br>
        
          <div style="text-align: end">
            <v-btn class="btn-next" size="large" @click="submitForm" variant="tonal" :disabled="!isFormValid"> Reset password </v-btn>
          </div>
       
        <br>
      </v-card>
    </div>
      <!-- Snackbar -->
      <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
      {{ snackbar.message }}
    </v-snackbar>
  </template>

<style scoped>

.parent-div{
    position: relative;
    left: 300px;
    top: 50px
}

.title-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
}

.buttons-div{
  display: flex;
  justify-content: flex-end;
}

.v-btn.btn-next{
  background-color: rgb(41, 85, 217);
  color: white;
  text-transform: capitalize;
}
</style>
