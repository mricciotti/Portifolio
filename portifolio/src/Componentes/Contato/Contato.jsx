import React from 'react';

function Contato(){
    return (
        <section id="contact" className="text-center py-10">
        <h2 className="text-3xl mb-6 text-white">ENTRE EM CONTATO</h2>
        <form className="flex flex-col items-center">
            <input type="text" placeholder="Nome" className="my-2 w-1/2 px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email" className="my-2 w-1/2 px-4 py-2 border border-gray-300 rounded-lg" />
            <textarea placeholder="Mensagem" className="my-2 w-1/2 px-4 py-2 border border-gray-300 rounded-lg" />
            <button type="submit" className="mt-4 w-1/6 py-2 bg-sky-900 text-white rounded-full hover:bg-sky-700 transition-colors duration-300 cursor-pointer">Enviar</button>
        </form>
        </section>
        )
}

export default Contato;