import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://fict-itmo.komarov.ml/api/',
  headers: { 'Content-type': 'application/json' }
})