import { get, post } from './AxiosServices'

export const createNote = (reqData, token) => {
  const headerOptions = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post('/notes/addNotes', reqData, headerOptions)
}
