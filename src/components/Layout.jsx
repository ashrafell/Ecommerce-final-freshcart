import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Layout() {
    return (


        <div>
            <NavBar></NavBar>
            <div className="container">
                <Outlet />
            </div>

        </div>



    )
}
