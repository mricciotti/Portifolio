import { Outlet } from 'react-router-dom'
import Header from './Componentes/Header/Header'
import Footer from './Componentes/Footer/Footer'

export default function App() {
  return <><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header /><Outlet /><Footer /></>
}
