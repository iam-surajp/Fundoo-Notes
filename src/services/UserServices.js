import { post } from './AxiosServices'

export const loginUser = (reqData) => {
  const headerOptions = {
    'Content-Type': 'application/json'
  }
  return post('user/login', reqData, headerOptions)
    .then((response) => {
      console.log('Login successful', response.data)
      return response.data
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
  return post('user/signup', reqData, headerOptions)
    .then((response) => {
      console.log('Signup successful', response)
      return response
    })
    .catch((error) => {
      console.error('Signup failed', error.message)
      throw error
    })
}
