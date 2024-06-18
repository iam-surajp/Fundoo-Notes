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

export const getTrashNotesServices = () => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return get(`notes/getTrashNotesList`, { headers })
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

export const changeColorServices = (reqData) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post(`notes/changesColorNotes`, reqData, { headers })
}

export const archiveNoteServices = (reqData) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post(`notes/archiveNotes`, reqData, { headers })
}

export const getArchiveNoteServices = () => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return get(`notes/getArchiveNotesList`, { headers })
}
