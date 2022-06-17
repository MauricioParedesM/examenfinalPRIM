import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import About from '../components/About'
import Dashboard from '../components/Dashboard'

function Header() {
    return (
        <BrowserRouter>
            <header className='menu'>
                <nav>
                    <ul>
                        <NavLink to="/Home">
                        <li>Home</li>
                        </NavLink>
                        <NavLink to="/About">
                        <li>About</li>
                        </NavLink>
                        <NavLink to="/Dashboard">
                        <li>Dashboard</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/Home' element={ <Home/> } />
                <Route path='/About' element={ <About/> } /> 
                <Route path='/Dashboard' element={ <Dashboard/> } />
                <Route path='/*' element={ <Home/> } />
            </Routes>
        </BrowserRouter>
    )
}

export {Header}