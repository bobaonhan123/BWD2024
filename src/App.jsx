import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './Pages/MainPage'
import AboutPage from './Pages/AboutPage'

function App() {

  return (
    <div className='bg-[#f6f7fb]'>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
