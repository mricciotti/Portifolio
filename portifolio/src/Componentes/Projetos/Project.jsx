// Project.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Project({ title, image, link }) {
    return (
        <div className="w-64 sm:w-72 md:w-80 h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <p className="text-white font-bold text-xl">{title}</p>
                <a href={link} className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg" target="_blank" rel="noreferrer">Ver Mais</a>
            </div>
        </div>
    );
}

export default Project;