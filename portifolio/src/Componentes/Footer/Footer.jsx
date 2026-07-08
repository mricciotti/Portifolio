import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";



function Footer() {
    return (
        <footer className="p-10  text-white">
            <div className="max-w-7xl mx-auto">
                    <div className="bg-blue-950 rounded-2xl py-12 md:py-[120px] px-6 md:px-10 shadow-2xl ring-1 ring-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="w-40 h-40 md:w-64 md:h-64">
                            <img src={Logo} alt="Minha logo" className="w-full h-full" />
                        </div>
                        <div className="flex space-x-4 text-white ">
                            <Link to="mailto:matheus.ricciottil@gmail.com">
                                <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                                    <HiOutlineMail className="text-black text-2xl" />
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
            </div>
        </footer>
    );
};

export default Footer;