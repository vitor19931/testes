import { useState } from 'react'
import Header from './components/Header'
import AdicionarTime from './components/AdicionarUsuario'
import Footer from './components/Footer'

export default function App() {
  const [times, setTimes] = useState([])

  return (
    <>
      <Header />
      <AdicionarTime times={times} setTimes={setTimes} />
      <Footer />
    </>
  )
}