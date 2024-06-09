<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  computed: {
    isFormValid() {
      if (this.email!==''){
        return true
      }else{
        return false
      }
    }
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
            <v-btn class="btn-next" size="large" @click="" variant="tonal" :disabled="!isFormValid"> Next </v-btn>
          </div>
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
  justify-content: space-between;
}

.v-btn.btn-next{
  background-color: rgb(41, 85, 217);
  color: white;
}
</style>