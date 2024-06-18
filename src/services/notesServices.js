import { get, post } from './AxiosServices'

export const createNoteServices = (reqData, token) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post(`notes/addNotes`, reqData, { headers })
}

export const getAllNotesServices = (token) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return get(`notes/getNotesList`, { headers })
}

export const deleteNoteServices = (reqData) => {
  console.log('delete service======')
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post(`notes/trashNotes`, reqData, { headers })
}

export const updateNoteServices = (reqData) => {
  console.log('update service======')
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post(`notes/updateNotes`, reqData, { headers })
}
