import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
            navigate('/')
        })
    }
  return (
    <button onClick={logoutHandler} className= 'inline-bock px-6 py-2 duration-200 text-lg  hover:bg-green-600'
  >Logout</button>
  )
}

export default LogoutBtn