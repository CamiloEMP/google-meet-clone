import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}
