const BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api/'

import axios from 'axios'

export const post = (url, data, config = {}) => axios.post(BASE_URL + url, data, config)

// export const get = (url, config = {}) => axios.get(`${BASE_URL}${url}`, config)
