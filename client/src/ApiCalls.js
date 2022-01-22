import axios from "axios";

// const baseURL = "http://localhost:5000/api/auth";
const baseURL = process.env.NODE_ENV ? "https://watch-party-sarthak.herokuapp.com/api/auth" : "http://localhost:5000/api/auth";                     

// const baseURL = "https://watch-party-sarthak.herokuapp.com/api/auth"

export const LoginCall = async (data)=>{
  const res = await axios.post(`${baseURL}/login`, data, {withCredentials: true});
  return res;
}

export const RegisterCall = async (data)=>{
    const res = await axios.post(`${baseURL}/register`, data, {withCredentials: true});
    return res;
}

export const getUserCall = async ()=>{
    const res = await axios.get(`${baseURL}/getUser`, {withCredentials: true});
    return res;
}

export const LogoutCall = async ()=>{
    const res = await axios.get(`${baseURL}/logout`, {withCredentials: true});
    return res;
}