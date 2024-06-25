import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline my-96">
        Hello world!
      </h1>
      <Footer />
    </>
  )
}

export default App
