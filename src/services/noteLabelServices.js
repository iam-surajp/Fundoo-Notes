import { get, post } from './AxiosServices'

const token = localStorage.getItem('token')

export const createLabelServices = (reqData) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post(`noteLabels`, reqData, { headers })
}
