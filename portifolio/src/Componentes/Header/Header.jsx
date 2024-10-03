import React from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


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
            <header className="p-10 bg-gray-900/70">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="w-64 h-64" id="logo">
                        <Link to="#">
                            <img src={Logo} alt="minha logo" className="w-full h-full" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex">
                        <ul className="flex space-x-10">
                            <li><a href="#logo" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Início</a></li>
                            <li><a href="#especiliadades" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Especialidades</a></li>
                            <li><a href="#sobre" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Sobre</a></li>
                            <li><a href="#projetos" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Projetos</a></li>
                            <li><a href="#contato" className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300">Contato</a></li>
                        </ul>
                    </nav>
   
                </div>
            </header>
        </>
    )
}

export default Header;