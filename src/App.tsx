import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ponuda from './pages/Ponuda'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ponuda" element={<Ponuda />} />
      </Routes>
    </Router>
  )
}

export default App

