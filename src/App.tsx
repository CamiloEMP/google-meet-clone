import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { MeetConfig } from './pages/MeetConfig'
import { Room } from './pages/room'
import { Profile } from './pages/Profile'
import { useSession } from './hooks/useSession'
import { Layout } from './container/Layout'
import { useVideoContext } from './hooks/useVideoContext'
import { AuthSign } from './components/auth'

export const App = () => {
  const { isAuth } = useSession()
  const { isConnecting } = useVideoContext()
  return (
    <Layout>
      <Routes>
        <Route path="/" element={isAuth ? <Dashboard /> : <Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path=":room"
          element={isConnecting ? <Room /> : <MeetConfig />}
        />
      </Routes>
      <AuthSign />
    </Layout>
  )
}
