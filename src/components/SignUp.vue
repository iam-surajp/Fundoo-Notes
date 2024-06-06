<script>
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
        'Use 8 or more characters with a mix of letters, numbers, and symbols.'
    ],
    confirmPassword: '',
    confirmPasswordRules: [(v) => v === this.password || 'Password did not match.'],
    showPasswords: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        alert('Form is valid')
      } else {
        alert('Form is invalid')
      }
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

<template>
  <div>
    <v-card class="mx-auto" width="900px">
      <img style="width: 60px; margin: 20px" src="../assets/google.png" alt="img" />
      <label style="font-size: 25px; margin: 20px; position: relative; left: -100px">
        Create your Google Account
      </label>
      <div class="mydiv">
        <v-form ref="form" v-model="valid">
          <v-container>
            <div class="inputsection">
              <div class="name" style="display: flex">
                <v-text-field
                  v-model="fname"
                  color="primary"
                  label="First name"
                  variant="outlined"
                  class="custom-class"
                  :rules="fnameRules"
                  width="200px"
                ></v-text-field>

                <v-text-field
                  v-model="lname"
                  color="primary"
                  label="Last name"
                  variant="outlined"
                  class="custom-class"
                  :rules="lnameRules"
                  width="200px"
                ></v-text-field>
              </div>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="email"
                color="primary"
                label="Email"
                variant="outlined"
                :rules="emailRules"
                width="410px"
              ></v-text-field>
              <br />
              <div class="password">
                <v-text-field
                  v-model="password"
                  color="primary"
                  label="Password"
                  variant="outlined"
                  class="custom-class"
                  :rules="passwordRules"
                  width="150px"
                  :type="showPasswords ? 'text' : 'password'"
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  color="primary"
                  label="Confirm password"
                  variant="outlined"
                  class="custom-class"
                  :rules="confirmPasswordRules"
                  width="200px"
                  :type="showPasswords ? 'text' : 'password'"
                  :append-icon="showPasswords ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPasswords = !showPasswords"
                ></v-text-field>
              </div>
              <br />
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-card-actions>
                <div class="actions">
                  <v-btn
                    variant="plain"
                    style="color: rgb(41, 85, 217); position: absolute; left: 50px"
                  >
                    Sign in instead
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="validate()"
                    style="background-color: rgb(41, 85, 217); margin-left: 150px"
                  >
                    <label style="color: white">Sign Up</label>
                  </v-btn>
                </div>
              </v-card-actions>
            </div>
          </v-container>
        </v-form>

        <div class="img-section">
          <img src="../assets/google_create.jpeg" alt="google-img" />
        </div>
      </div>
    </v-card>
  </div>
</template>

<style>
.mydiv {
  display: flex;
}

.custom-class {
  margin-right: 10px;
  margin-bottom: 15px;
}

.actions {
  display: flex;
  justify-content: space-between;
}

.password {
  display: flex;
  justify-content: space-around;
}
</style>
