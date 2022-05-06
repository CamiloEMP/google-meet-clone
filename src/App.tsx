import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Layout } from './container/Layout'
import { AuthSign } from './components/auth'
import { VideoConference } from './pages/room'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path=":room" element={<VideoConference />} />
      </Routes>
      <AuthSign />
    </Layout>
  )
}
