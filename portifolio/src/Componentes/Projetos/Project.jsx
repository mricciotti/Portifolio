// Project.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Project({ title, image, link }) {
    return (
        <div className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <p className="text-white font-bold text-xl">{title}</p>
                <Link to={link} className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">Ver Mais</Link>
            </div>
        </div>
    );
}

export default Project;