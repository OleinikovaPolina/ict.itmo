import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fict-itmo.komarov.ml/api/',
  headers: { 'Content-type': 'application/json' }
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export default instance
