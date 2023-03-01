import React, { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onUserNameInput = e =>{
        setUsername(e.target.value)
    }

    const onPasswordInput = e =>{
        setPassword(e.target.value)
    }

    return (
        <div className='login-page'>
            <form className='login-form'>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">User name</label>
                    <div className="col-sm-10">
                    <input type="text" onChange={onUserNameInput} value={username}  className="form-control" id="staticEmail"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" onChange={onPasswordInput} value={password} className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row w-25">
                    <button type='button' className='btn btn-primary'>Login</button>
                </div>
                
            </form>
        </div>
    )
}
