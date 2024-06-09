<script>
import { RouterLink } from 'vue-router'
import { signupUser } from '../services/UserServices'

export default {
  data: () => ({
    valid: false,
    fname: '',
    fnameRules: [
      (v) => !!v || 'First name is required',
      (v) => (v && v.length <= 10) || 'First name must be less than 10 characters'
    ],
    lname: '',
    lnameRules: [
      (v) => !!v || 'Last name is required',
      (v) => (v && v.length <= 10) || 'Last name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v) || 'Must be a valid e-mail'
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v) ||
        'Use 8 or more characters, numbers & symbols'
    ],
    confirmPassword: '',
    confirmPasswordRules: [(v) => !!v || 'Confirm password is required'],
    showPasswords: false,
    snackbar: {
      show: false,
      message: '',
      timeout: 3000
    }
  }),

  methods: {
    async submitForm() {
      if (
        this.fname !== '' &&
        this.lname !== '' &&
        this.email !== '' &&
        this.password !== '' &&
        this.confirmPassword !== ''
      ) {
        if (this.password != this.confirmPassword) {
          this.snackbar.message = 'Passwords did not match'
          this.snackbar.color = 'error'
          this.snackbar.show = true
        } else if (this.valid) {
          const reqData = {
            firstName: this.fname,
            lastName: this.lname,
            email: this.email,
            password: this.password
          }

          signupUser(reqData)
            .then((response) => {
              if (response && response.status >= 200 && response.status < 300) {
                this.snackbar.message = 'Form submitted successfully'
                this.snackbar.color = 'success'
                this.snackbar.show = true
                console.log(response.data)
              } else {
                this.snackbar.message = 'Form submission failed'
                this.snackbar.color = 'error'
                this.snackbar.show = true
                console.error(response)
              }
            })
            .catch((error) => {
              this.snackbar.message = "There's some issue, please try again later."
              this.snackbar.color = 'error'
              this.snackbar.show = true
              console.error(error)
            })
        }
      }
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

<template>
  <div class="outer" justify="center">
    <v-card class="myclass">
      <div class="mydiv" justify="center">
        <v-form ref="form" v-model="valid">
          <v-container>
            <div class="title">
              <img style="width: 60px" src="../assets/google.png" alt="img" />
              <label style="font-size: 25px"> Create your Google Account </label><br />
            </div>
            <div class="inputsection">
              <div class="name" style="display: flex; margin-bottom: 10px">
                <v-text-field
                  v-model="fname"
                  color="primary"
                  label="First name"
                  variant="outlined"
                  class="custom-class"
                  :rules="fnameRules"
                  width="195px"
                ></v-text-field>

                <v-text-field
                  v-model="lname"
                  color="primary"
                  label="Last name"
                  variant="outlined"
                  class="custom-class"
                  :rules="lnameRules"
                  width="195px"
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model="email"
                  color="primary"
                  label="Email"
                  variant="outlined"
                  :rules="emailRules"
                  width="400px"
                ></v-text-field>
              </div>
              <br />
              <div>
                <a href="" style="color: rgb(41, 85, 217); font-size: 16px; font-weight: 500"
                  >Use my current email address instead</a
                >
              </div>
              <br />
              <div class="password">
                <v-text-field
                  v-model="password"
                  color="primary"
                  label="Password"
                  variant="outlined"
                  class="custom-class"
                  :rules="passwordRules"
                  width="195px"
                  :type="showPasswords ? 'text' : 'password'"
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  color="primary"
                  label="Confirm password"
                  variant="outlined"
                  class="custom-class"
                  :rules="confirmPasswordRules"
                  width="195px"
                  :type="showPasswords ? 'text' : 'password'"
                  @click:append="showPasswords = !showPasswords"
                ></v-text-field>
              </div>
              <div class="showpassword-div">
                <v-checkbox label="Show password" v-model="showPasswords"></v-checkbox>
              </div>

              <div class="actions">
                <div>
                  <RouterLink to="/login" style="color: rgb(41, 85, 217); font-weight: 600">
                    Sign in instead
                  </RouterLink>
                </div>

                <div>
                  <v-btn class="btn-signup" @click="submitForm()" :disabled="!valid">
                    Sign Up
                  </v-btn>
                </div>
              </div>
              <br />
            </div>
          </v-container>
        </v-form>

        <div class="img-section">
          <img src="../assets/google_create.jpeg" alt="google-img" />
        </div>
      </div>
    </v-card>
    <!-- Snackbar -->
    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
      {{ snackbar.message }}
    </v-snackbar>
  </div>
</template>

<style>
.myclass {
  width: 800px;
  position: relative;
  left: 200px;
}

.mydiv {
  display: flex;
}

.custom-class {
  margin-right: 10px;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password {
  display: flex;
  justify-content: space-around;
}

button,
a {
  cursor: pointer;
}

.title {
  display: flex;
  flex-direction: column;
}

.v-btn.btn-signup {
  color: white;
  background-color: rgb(41, 85, 217);
}

@media only screen and (max-width: 600px) {
  .myclass {
    left: 50px;
  }
}
</style>
