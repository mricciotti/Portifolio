import React from 'react';
import MinhaFoto from '../../assets/minha-foto.jpg';



function Header() {
    const toggleMenu = () => {
        const menuContent = document.getElementById("nav-menu-mobile-content");
        if (menuContent.style.display === "flex") {
            menuContent.style.display = "none";
        } else {
            menuContent.style.display = "flex";
        }
    };

    return (
        <>
            <header className="p-6 md:p-10">
                <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
                    {/* Logo (left) */}
                    <div className="col-span-1" id="logo">
                        <a href="#logo">
                            <img src={MinhaFoto} alt="minha foto" className="w-24 h-24 md:w-64 md:h-64 object-cover" />
                        </a>
                    </div>

                    {/* Nav (center) */}
                    <nav className="hidden md:flex col-span-1 justify-center">
                        <ul className="flex space-x-8">
                            <li><a href="#logo" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Início</a></li>
                            <li><a href="#sobre" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Sobre</a></li>
                            <li><a href="#especialidades" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Especialidades</a></li>
                            <li><a href="#projetos" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Projetos</a></li>
                            <li><a href="#contact" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Contato</a></li>
                        </ul>
                    </nav>

                    {/* Mobile menu button (right) */}
                    <div className="col-span-1 flex justify-end md:hidden">
                        <button onClick={toggleMenu} aria-label="Abrir menu" className="p-2 rounded-md bg-white/10 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu content */}
                    <div id="nav-menu-mobile-content" className="hidden col-span-3 md:hidden mt-4">
                        <ul className="flex flex-col items-center space-y-3">
                            <li><a onClick={() => document.getElementById('nav-menu-mobile-content').style.display='none'} href="#logo" className="text-white">Início</a></li>
                            <li><a onClick={() => document.getElementById('nav-menu-mobile-content').style.display='none'} href="#especialidades" className="text-white">Especialidades</a></li>
                            <li><a onClick={() => document.getElementById('nav-menu-mobile-content').style.display='none'} href="#sobre" className="text-white">Sobre</a></li>
                            <li><a onClick={() => document.getElementById('nav-menu-mobile-content').style.display='none'} href="#projetos" className="text-white">Projetos</a></li>
                            <li><a onClick={() => document.getElementById('nav-menu-mobile-content').style.display='none'} href="#contact" className="text-white">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;