import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])
    
    // Estado para controlar se a lista está visível ou não
    const [mostrarLista, setMostrarLista] = useState(false)

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email) {
            setListaDeUsuarios([...listaDeUsuarios, {nome, email}])
            setNome('')
            setEmail('')
            
            // NOVO: Garante que a lista fique visível assim que um usuário for adicionado!
            setMostrarLista(true)
        }
    }
    
    return (
        <div className='formulario'>
            <h2>Adicionar usuario</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input 
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>

            <hr />

            <h2>Lista de usuarios</h2>
            
            {/* Botão que inverte o valor de "mostrarLista" ao ser clicado manualmente */}
            <button 
                type="button" 
                className="btn-toggle" 
                onClick={() => setMostrarLista(!mostrarLista)}
            >
                {mostrarLista ? 'Ocultar Lista ⬆️' : 'Ver Lista ⬇️'}
            </button>

            {/* A lista de usuários só aparece se "mostrarLista" for true */}
            {mostrarLista && (
                <ul>
                    {listaDeUsuarios.map((usuario, index) => (
                        <li key={index}>
                            {usuario.nome} - {usuario.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

