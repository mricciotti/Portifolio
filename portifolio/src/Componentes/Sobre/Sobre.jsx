// src/Componentes/Sobre/Sobre.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import MinhaFoto from '../../assets/minha-foto.jpg';
import logo3 from '../../assets/logo3.png';

function Sobre() {
  return (
  <section className="py-12 md:py-20" id="sobre">
      <div className="max-w-7xl mx-auto">
    <div className="bg-blue-950 rounded-2xl py-12 md:py-[120px] px-6 md:px-10 flex flex-col md:flex-row gap-8 items-center justify-center shadow-2xl ring-1 ring-white/5">
          <div className="w-72 md:w-80 flex-shrink-0">
            <img src={logo3} alt="Minha Foto" className="rounded-3xl w-full h-full" />
          </div>

          <div className="text-white space-y-6 max-w-3xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl">MATHEUS RICCIOTTI</h2>
            <p>Tenho 18 anos, estou cursando Engenharia de Software na FIAP,</p>
            <p className="text-sm md:text-base">Atualmente, busco por me tornar um desenvolvedor FullStack,</p>
            <p className="text-sm md:text-base">Estou sempre em busca de novos desafios e conhecimentos que me permitam crescer profissionalmente</p>
            <p className="text-sm md:text-base">Busco um desafio que me permita aplicar meu conhecimento e experiência em um ambiente inovador, onde possa contribuir para o sucesso da empresa e, ao mesmo tempo, continuar me desenvolver como profissional.</p>

            <div className="flex gap-5 justify-center md:justify-start">
              <a href="https://www.instagram.com/mat_ricciotti/" aria-label="Instagram">
                <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                  <BsInstagram className="text-black text-2xl" />
                </button>
              </a>

              <a href="mailto:matheus.ricciottil@gmail.com" aria-label="Email">
                <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                  <HiOutlineMail className="text-black text-2xl" />
                </button>
              </a>

              <a href="https://www.linkedin.com/in/matheus-ricciotti-55a087302/" aria-label="LinkedIn">
                <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                  <BsLinkedin className="text-black text-2xl" />
                </button>
              </a>

              <a href="https://github.com/mricciotti" aria-label="GitHub">
                <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                  <BsGithub className="text-black text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
