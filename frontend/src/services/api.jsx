import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/blog'
})

export const SignUp = async(data)=> {
   const res = await axios.post(`${api}/signup`, data)
   return res.data
}

export const LogIn = async(data)=> {
   const res = await axios.post(`${api}/login`, data)
   return res.data
}

export default api