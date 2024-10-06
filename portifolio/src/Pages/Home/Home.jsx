import React, { useEffect } from "react";
import Projeto2 from '../../assets/projeto2.png';
import Projeto3 from '../../assets/projeto3.png';
import Projeto5 from '../../assets/projeto5.png';
import Projeto6 from '../../assets/projeto6.jpeg';
import { MdHtml } from "react-icons/md"; 
import { FaCss3, FaJs, FaSass, FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { BsFiletypeJsx, BsGit } from "react-icons/bs";
import ProjectList from '../../Componentes/Projetos/ProjectList';
import SkillList from '../../Componentes/Skills/SkillList';
import Sobre from '../../Componentes/Sobre/Sobre'; 
import Contato from '../../Componentes/Contato/Contato'


function Home() {


    const projects = [
        { title: "Projeto 2", image: Projeto2, link: "https://challenge-formula-e-phi.vercel.app/" },
        { title: "Projeto 3", image: Projeto3, link: "https://global-solution-steel.vercel.app/" },
        { title: "Projeto 5", image: Projeto5, link: "https://cp2-front-end.vercel.app/" },
        { title: "Projeto 6", image: Projeto6, link: "https://workshop-de-html-e-css.vercel.app/" },
    ];

    const skills = [
        { name: "HTML", icon: MdHtml }, 
        { name: "CSS", icon: FaCss3 },
        { name: "JavaScript", icon: FaJs },
        { name: "Python", icon: AiOutlinePython },
        { name: "JSX", icon: BsFiletypeJsx },
        { name: "Sass", icon: FaSass },
        { name: "Git", icon: BsGit },
        { name: "React", icon: FaReact },
    ];

    return (
        <main>
            {/* Seção Sobre */}
            <Sobre />  

            {/* Seção Portfólio */}
            <section className="py-20" id="projetos">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl text-white mb-10">MEUS PROJETOS</h2>
                    <ProjectList projects={projects} />
                </div>
            </section>

            {/* Seção Especialidades */}
            <section className="py-20 " id="especialidades">
                <div className="max-w-7xl mx-auto text-center ">
                    <h2 className="text-4xl text-white mb-10 ">MINHAS SKILLS</h2>
                    <SkillList skills={skills}  /> {/* Renderizar SkillList com dados */}
                </div>
            </section>

            <Contato />  
        </main>
    );
}

export default Home;
