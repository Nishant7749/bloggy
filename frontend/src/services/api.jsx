import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const SignUp = async(data)=> {
   const res = await api.post('/auth/signup', data)
   return res.data
}

export const LogIn = async(data)=> {
   const res = await api.post('/auth/login', data)
   return res.data
}

export default api