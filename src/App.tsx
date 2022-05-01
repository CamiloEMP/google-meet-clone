import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { MeetConfig } from './pages/MeetConfig'
import { Room } from './pages/room'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meet-config" element={<MeetConfig />} />
      <Route path=":room" element={<Room />} />
    </Routes>
  )
}
