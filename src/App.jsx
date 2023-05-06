import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RankingPage from './pages/RankingPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<RankingPage/>} path='/'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
