import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="sm-nav ">
                <nav className='first row m-2'>
                    <div class="d-flex">
                        <div class="p-2 admin">Admin</div>
                        <div class="bw-img p-2 BW-logo">
                            <img src="logo.png"/>
                        </div>
                        <div class="ml-auto login-btn mt-3">
                            <button class="btn bg-dark text-white my-2 my-sm-0 " type="submit">
                                <Link to={'/Login'}>Login</Link>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="app">
                <div className="navbar">
                    <Link to={'/'} href="#">Dashbord</Link>
                    <Link to={'/Co_Faculty'}>Co-od. Faculty</Link>
                    <Link to={'/Faculty'} >Faculty</Link>
                    <Link to={'Student'} >Student</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar