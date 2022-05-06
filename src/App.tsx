import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { MeetConfig } from './pages/MeetConfig'
import { Room } from './pages/room'
import { Profile } from './pages/Profile'
import { Layout } from './container/Layout'
import { AuthSign } from './components/auth'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path=":room" element={false ? <Room /> : <MeetConfig />} />
      </Routes>
      <AuthSign />
    </Layout>
  )
}
