import './App.css'
import Header from './components/Header'
import AdicionarUsuario from './components/AdicionarUsuario'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <main>
        <AdicionarUsuario />
        </main>
        <footer />
        </div>
      </>
  )
}

export default App


