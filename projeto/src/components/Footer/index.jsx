import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} Temporada Oficial
                <br />
                VAR DA VÁRZEA - RUMO À TAÇA! 🏆
            </p>
        </footer>
    )
}