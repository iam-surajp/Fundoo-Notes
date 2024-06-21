import { get, post, Delete } from './AxiosServices'

const token = localStorage.getItem('token')

export const createLabelServices = (reqData) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return post(`noteLabels`, reqData, { headers })
}

export const getAllLabelsServices = () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return get(`noteLabels/getNoteLabelList`, { headers })
}

export const updateLabelServices = (reqData, id) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  console.log(id)
  return post(`noteLabels/${id}/updateNoteLabel`, reqData, { headers })
}

export const deleteLabelServices = (id) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  console.log(id)
  return Delete(`noteLabels/${id}/deleteNoteLabel`, { headers })
}
