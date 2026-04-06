import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email) {
            setListaDeUsuarios([...listaDeUsuarios, {nome, email}])

            setNome('')
            setEmail('')
        }
    }
    return (
        <div className='formulario'>
            <h2>Adicionar usuario</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input 
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>

            <hr />

            <h2>Lista de usuarios</h2>
            <ul>
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    )


}
