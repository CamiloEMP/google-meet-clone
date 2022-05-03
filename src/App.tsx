import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { MeetConfig } from './pages/MeetConfig'
import { Room } from './pages/room'
import { Provider } from 'react-redux'
import { store } from './redux'
import { Profile } from './pages/Profile'

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meet-config/:nameRoom" element={<MeetConfig />} />
        <Route path="/profile" element={<Profile />} />
        <Route path=":room" element={<Room />} />
      </Routes>
    </Provider>
  )
}
