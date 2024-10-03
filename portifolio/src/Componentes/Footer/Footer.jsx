import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";


function Footer() {
    return (
        <footer className="p-10 bg-gray-900/70 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-64 h-64">
                        <img src={Logo} alt="Minha logo" className="w-full h-full" />
                    </div>
                    <div className="flex space-x-4 text-white ">
                        <Link to="mailto:matheus.ricciottil@gmail.com">
                            <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                                <BsEnvelope className="text-black text-2xl" />
                            </button>
                        </Link>
                        <Link to="https://www.instagram.com/mat_ricciotti/">
                            <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                                <BsInstagram className="text-black text-2xl" />
                            </button>
                        </Link>
                        <Link to="https://www.linkedin.com/in/matheus-ricciotti-55a087302/">
                            <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                                <BsLinkedin className="text-black text-2xl" />
                            </button>
                        </Link>
                        <Link to="https://github.com/mricciotti">
                            <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                                <BsGithub className="text-black text-2xl" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-sky-900 mt-6 pt-4 text-center">
                    <p><i className="bi bi-envelope-fill"></i> <Link to="mailto:matheus.ricciottil@gmail.com" className="text-white">matheus.ricciottil@gmail.com</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;