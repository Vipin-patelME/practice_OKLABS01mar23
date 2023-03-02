import React, { useState } from 'react'

export default function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const onUserNameInput = e =>{
        setUsername(e.target.value)
    }

    const onPasswordInput = e =>{
        setPassword(e.target.value)
    }
    const onEmailInput = e =>{
        setEmail(e.target.value)
    }

    const onSubmitUserDetails = ()=>{
        const url = "http://localhost:1337/api/auth/local/register"
        const userData = {
            "username": username,
            "email": email,
            "password": password
          }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };

        console.log(username)

        fetch(url, options)
        .then((res =>{
            return res.json()
        }))
        .then((data =>{
            console.log(data)
        }))
        .catch()
    }

    return (
        <div className='login-page'>
            <form  className='login-form'>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">User name</label>
                    <div className="col-sm-10">
                    <input type="text" onChange={onUserNameInput}  value={username} className="form-control" id="staticEmail"  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" onChange={onEmailInput} value={email} className="form-control" id="inputEmail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" onChange={onPasswordInput} value={password} className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row w-25">
                    <input onClick={onSubmitUserDetails} className='btn btn-primary' value = "Create Account" />
                </div>
            </form>
        </div>
    )
}
