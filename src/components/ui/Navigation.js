import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <nav className="nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
            </nav>


        </>
    )
}
