<script>
import { forgotPassword } from '@/services/UserServices';

export default {
  data: () => ({
    valid:false,   
    email: '',
    emailRules: [
    (v) => !!v || 'E-mail is required',
    (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v) || 'Must be a valid e-mail'
    ],
    snackbar: {
      show: false,
      message: '',
      timeout: 3000
    }
  }),

  methods: {
    validateForm() {
      this.valid = this.emailRules.every((rule) => rule(this.email) === true);
    },
    submitForm() {
      if (this.valid) {
        reqData = {
          'email':this.email
        }

        forgotPassword(reqData)
        .then(res=>{
             console.log(res)
             this.snackbar.message = "The password reset link has been sent to your registered email."
             this.snackbar.color = 'primary'
             this.snackbar.show = true
        }).catch(error=>{
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
            <div style="font-size: 30px;text-align: center">Account Recovery</div>
            <div style="font-size: 20px;text-align: center">Recover your google account</div>
        </div>
        <br><br>
        <div class="text-field">
            <v-text-field
            placeholder="Email address" 
            label="Email or phone"
            variant="outlined"    
            v-model="email" 
            :rules="emailRules"
            @input="validateForm"
            ></v-text-field>
        </div>        

         <br>
  
        <div class="buttons-div">
          <div>
          <a
            class="forgotPass"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            style="color:rgb(41, 85, 217)"
          >
            Forgot email?</a
          >
          </div>
  
          <div>
            <v-btn class="btn-next" size="large" @click="submitForm" variant="tonal" :disabled="!valid"> Next </v-btn>
          </div>
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
    top: 50px;
}

.title-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
}

.buttons-div{
  display: flex;
  justify-content: space-between;
}

.v-btn.btn-next{
  background-color: rgb(41, 85, 217);
  color: white;
  text-transform: capitalize;
}
</style>