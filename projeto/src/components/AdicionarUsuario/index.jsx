import { useState } from 'react'
import './style.css'

export default function AdicionarTime({ times, setTimes }) {
  const [nomeTime, setNomeTime] = useState('')
  const [tecnico, setTecnico] = useState('')
  const [timeSelecionado, setTimeSelecionado] = useState('')
  const [nomeJogador, setNomeJogador] = useState('')
  const [posicao, setPosicao] = useState('GOL')
  const [numero, setNumero] = useState('')

  const handlerAdicionarTime = (e) => {
    e.preventDefault()
    if (!nomeTime || !tecnico) return
    setTimes([...times, { nome: nomeTime, tecnico, jogadores: [] }])
    setNomeTime('')
    setTecnico('')
  }

  const handlerAdicionarJogador = (e) => {
    e.preventDefault()
    if (timeSelecionado === '' || !nomeJogador) return
    const novoJogador = { nome: nomeJogador, posicao, numero: numero || '?' }
    const novosTimes = times.map((t, i) =>
      i === Number(timeSelecionado)
        ? { ...t, jogadores: [...t.jogadores, novoJogador] }
        : t
    )
    setTimes(novosTimes)
    setNomeJogador('')
    setNumero('')
  }

  return (
    <div className='formulario'>
      <h2>Cadastrar Clube</h2>
      <form onSubmit={handlerAdicionarTime}>
        <input
          type="text"
          placeholder="Nome do Time (ex: Várzea FC)"
          value={nomeTime}
          onChange={(e) => setNomeTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome do Técnico"
          value={tecnico}
          onChange={(e) => setTecnico(e.target.value)}
        />
        <button type="submit">+ Cadastrar Time</button>
      </form>

      <hr />

      <h2>Adicionar Jogador</h2>
      <form onSubmit={handlerAdicionarJogador}>
        <select value={timeSelecionado} onChange={(e) => setTimeSelecionado(e.target.value)}>
          <option value="">Selecionar time...</option>
          {times.map((t, i) => (
            <option key={i} value={i}>{t.nome}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Nome do jogador"
          value={nomeJogador}
          onChange={(e) => setNomeJogador(e.target.value)}
        />
        <select value={posicao} onChange={(e) => setPosicao(e.target.value)}>
          <option value="GOL">Goleiro</option>
          <option value="ZAG">Zagueiro</option>
          <option value="LAT">Lateral</option>
          <option value="VOL">Volante</option>
          <option value="MEI">Meia</option>
          <option value="ATA">Atacante</option>
        </select>
        <input
          type="number"
          placeholder="Nº camisa"
          value={numero}
          min="1"
          max="99"
          onChange={(e) => setNumero(e.target.value)}
        />
        <button type="submit">+ Adicionar Jogador 👟</button>
      </form>

      <hr />

      <h2>Times e Elencos</h2>
      {times.map((time, i) => (
        <div key={i} className='time-card'>
          <h3>🛡️ {time.nome} — Prof. {time.tecnico}</h3>
          {time.jogadores.length === 0 ? (
            <p>Nenhum jogador cadastrado ainda.</p>
          ) : (
            <ul>
              {time.jogadores.map((j, idx) => (
                <li key={idx}>
                  <strong>#{j.numero}</strong> {j.nome} — <em>{j.posicao}</em>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}