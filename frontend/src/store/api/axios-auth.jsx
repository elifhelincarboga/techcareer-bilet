import axios from 'axios'

const api = (customConfig, token) => {
  const defaultConfig = {
    baseURL: 'http://localhost:3000/api',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    }
  }

  const instance = axios.create({ ...defaultConfig, ...customConfig })
  return instance
}

export default api