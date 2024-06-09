<script>
export default {
  data() {
    return {
      newPassword: '',
      confirmNewPassword: ''
    };
  },
  computed: {
    isFormValid() {
      return this.newPassword && this.confirmNewPassword;
    }
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
            v-model="newPassword"    
            ></v-text-field>
        </div>     
        <div class="text-field">
            <v-text-field 
            label="Confirm New Password"
            variant="outlined"   
            v-model="confirmNewPassword"  
            ></v-text-field>
        </div>    

         <br>
        
          <div style="text-align: end">
            <v-btn class="btn-next" size="large" @click="" variant="tonal" :disabled="!isFormValid"> Reset password </v-btn>
          </div>
       
        <br>
      </v-card>
    </div>
  </template>

<style>

.parent-div{
    position: relative;
    left: 300px;
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
}
</style>
