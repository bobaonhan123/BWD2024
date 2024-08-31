import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './Pages/MainPage'
import AboutPage from './Pages/AboutPage'
import LoginPage from './Pages/LoginPage'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
