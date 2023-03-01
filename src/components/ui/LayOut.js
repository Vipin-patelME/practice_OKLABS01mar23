import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

export default function LayOut() {
    return (
        <>
            <Header />
            <main>
                <Aside />
                <Outlet />
                <Aside />
            </main>
            <Footer />
        </>
    )
}
