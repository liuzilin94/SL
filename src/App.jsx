import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Dictionary from './pages/Dictionary'
import Learn from './pages/Learn'
import Community from './pages/Community'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="learn" element={<Learn />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
