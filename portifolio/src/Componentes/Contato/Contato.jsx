import React from 'react';

function Contato(){
    return (
        <section id="contact" className="text-center py-10">
        <div className="max-w-7xl mx-auto">
            <div className="bg-blue-950 rounded-2xl py-12 md:py-[120px] px-6 md:px-10 shadow-2xl ring-1 ring-white/5">
                <h2 className="text-3xl md:text-4xl mb-6 text-white">ENTRE EM CONTATO</h2>
                <form className="flex flex-col items-center">
                    <input type="text" placeholder="Nome" className="my-2 w-full max-w-xl px-4 py-3 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Email" className="my-2 w-full max-w-xl px-4 py-3 border border-gray-300 rounded-lg" />
                    <textarea placeholder="Mensagem" className="my-2 w-full max-w-xl h-32 px-4 py-3 border border-gray-300 rounded-lg" />
                    <button type="submit" className="mt-4 w-40 py-2 bg-sky-900 text-white rounded-full hover:bg-sky-700 transition-colors duration-300 cursor-pointer">Enviar</button>
                </form>
            </div>
        </div>
        </section>
        )
}

export default Contato;