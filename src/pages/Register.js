import React, { useState } from 'react'

export default function Register() {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onUserNameInput = e =>{
        setUsername(e.target.value)
    }

    const onPasswordInput = e =>{
        setPassword(e.target.value)
    }

    const onSubmitUserDetails = ()=>{
        const url = "http://localhost:1337/api/userlogins"
        const userData = {
            "data": {
              "username": username,
              "password": password
            }
          }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };

        fetch(url, options)
        .then((res =>{
            return res.json()
        }))
        .then((data =>{
            console.log(data)
        })).catch()
    }

    return (
        <div className='login-page'>
            <form onSubmit={onSubmitUserDetails} className='login-form'>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">User name</label>
                    <div className="col-sm-10">
                    <input type="text" onChange={onUserNameInput}  value={username} className="form-control" id="staticEmail"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" onChange={onPasswordInput} value={password} className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row w-25">
                    <button type='submit' className='btn btn-primary'>Create Account</button>
                </div>
            </form>
        </div>
    )
}
