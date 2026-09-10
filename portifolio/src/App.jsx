import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import { initSmoothScroll } from "./lib/smoothScroll"

function App() {
  useEffect(() => {
    const cleanup = initSmoothScroll()
    return cleanup
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
