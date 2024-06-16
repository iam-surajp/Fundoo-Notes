import { post } from './AxiosServices'

export const loginUser = (reqData) => {
  const headerOptions = {
    'Content-Type': 'application/json'
  }
  return post('user/login', reqData, headerOptions)
    .then((response) => {
      console.log('Login successful', response)
      const loginToken = response.data.id
      localStorage.setItem('token', loginToken)
      console.log(`This is login token ========> ${loginToken}`)
      return response
    })
    .catch((error) => {
      console.error('Login failed', error.message)
      throw error
    })
}

export const signupUser = (reqData) => {
  const headerOptions = {
    'Content-Type': 'application/json'
  }
  return post('user/userSignUp', reqData, headerOptions)
    .then((response) => {
      console.log('Signup successful', response)
      return response
    })
    .catch((error) => {
      console.error('Signup failed', error.message)
      throw error
    })
}

export const forgotPassword = (reqData) => {
  const headerOptions = {
    'Content-Type': 'application/json'
  }
  return post('user/reset', reqData, headerOptions)
    .then((response) => {
      console.log('Link to reset password sent on email', response)
      return response
    })
    .catch((error) => {
      console.error('Failed', error.message)
      throw error
    })
}

export const resetPassword = (reqData) => {
  const headerOptions = {
    'Content-Type': 'application/json'
  }
  return post('user/reset-password', reqData, headerOptions)
    .then((response) => {
      console.log('Password changed successfully', response)
      return response
    })
    .catch((error) => {
      console.error('Reset password failed', error.message)
      throw error
    })
}
