import { post } from './AxiosServices'

export const loginUser = async (reqData) => {
  try {
    const headerOptions = {
      'Content-Type': 'application/json'
    }
    const response = await post('user/login', reqData, headerOptions)
    console.log('Login successful', response.data)
    return response.data
  } catch (error) {
    console.error('Login failed', error.message)
    throw error
  }
}
