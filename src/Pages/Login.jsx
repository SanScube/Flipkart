import React, { useState } from 'react'
import { FormFields } from './../components/FormFields';
import { login } from "../store/loginSlice"
import { useDispatch } from "react-redux"

export const Login = () => {
    const dispatch = useDispatch()

    const fields = {
        email: '',
        password: '',
    }
    const [params, setParams] = useState(fields)
    // console.log(params)
    const handleInputs = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value })
    }

    const handleLogin = (e) => {
        console.log(params)
        e.preventDefault()
        dispatch(login(params))
    }
    return (
        <div className="w-1/2 m-auto p-4 mt-8 bg-yellow-200 ">Login
            <form onSubmit={handleLogin} className="flex flex-col mt-4 gap-y-6" action="">
                <input placeholder="Enter Email" name="email" onChange={handleInputs} value={params.email} type="email" />
                <input placeholder="Enter password" name="password" onChange={handleInputs} value={params.password} type="password" />
                <button>login</button>
            </form>

        </div>
    )
}
