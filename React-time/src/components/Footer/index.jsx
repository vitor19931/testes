import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} Primeiro jogadores
                <br />
                Aréa de contratação - RUMO ao topo! 🏆
            </p>
        </footer>
    )
}