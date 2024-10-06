// src/Componentes/Sobre/Sobre.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import MinhaFoto from '../../assets/minha-foto.jpg'; // Certifique-se de que o caminho da imagem esteja correto

function Sobre() {
  return (
    <section className="py-20" id="sobre">
      <div className="max-w-7xl mx-auto flex gap-16 flex-row-reverse">
        {/* Foto do lado direito */}
        <div className="w-80">
          <img src={MinhaFoto} alt="Minha Foto" className="" />
        </div>

        {/* Texto e Informações */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl">MATHEUS RICCIOTTI</h2>
          <p>Tenho 18 anos, estou cursando Engenharia de Software na FIAP,</p>
          <p>Atualmente, busco por me tornar um desenvolvedor FullStack,</p>
          <p>Estou sempre em busca de novos desafios e conhecimentos que me permitam crescer profissionalmente</p>
          <p>Busco um desafio que me permita aplicar meu conhecimento e experiência em um ambiente inovador, onde possa contribuir para o sucesso da empresa e, ao mesmo tempo, continuar me desenvolver como profissional.</p>

          {/* Ícones de redes sociais */}
          <div className="flex gap-5 flex-row-reverse">
            <Link to="https://www.instagram.com/mat_ricciotti/">
              <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                <BsInstagram className="text-black text-2xl" />
              </button>
            </Link>
            <Link to="mailto:matheus.ricciottil@gmail.com">
              <button className="w-12 h-12 rounded-full bg-sky-900 flex justify-center items-center hover:bg-sky-700 transition-colors duration-300 cursor-pointer">
                <HiOutlineMail className="text-black text-2xl" />
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
      </div>
    </section>
  );
}

export default Sobre;
