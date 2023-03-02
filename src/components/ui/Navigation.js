import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    const onLogout = ()=>{
        localStorage.removeItem("jwtToken")
        window.location.href = '/register'
    }

    return (
        <>
            <nav className="nav pt-5">
                <div className="nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                </div>
                <div className='logout-cont'>
                    <Link className="nav-link" onClick={onLogout}>Logout</Link>
                </div>
            </nav>
        </>
    )
}
