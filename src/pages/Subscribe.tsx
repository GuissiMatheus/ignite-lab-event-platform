import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { LogoIgniteLab } from "../components/LogoIgniteLab";
import { useCreateSubscriberMutation } from "../graphql/generated";

import codeMockup from '../assets/code-mockup.png';

export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        
        createSubscriber({
            variables: {
                name,
                email
            }
        }).then(
            // Ou colocar async em function e await em createSubscriber
            () => navigate('/event') 
        );
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat pt-2">
            <div className="flex flex-col items-center bg-reactIcon bg-top bg-no-repeat">
                <div className="w-full max-w-[1100px] flex flex-col sm:flex-row sm:items-center justify-between mt-4 sm:mt-20 mx-auto">
                    <div className="max-w-[640px] p-8 sm:p-0 text-center flex flex-col sm:block">
                        <div className="place-self-center">
                            <LogoIgniteLab />
                        </div>

                        <h1 className="mt-8 text-[2.5rem] leading-tight sm:text-justify">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed text-justify" id="ultimaLinha">
                            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                    </div>
                    
                    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                            <input
                                className="bg-gray-900 rounded px-5 h-14 outline-none outline-1 hover:outline-green-300 focus:outline-green-300 transition-colors"
                                type="text"
                                placeholder="Seu nome completo"
                                onChange={event => setName(event.target.value)}
                            />
                            <input
                                className="bg-gray-900 rounded px-5 h-14 outline-none outline-1 hover:outline-green-300 focus:outline-green-300 transition-colors"
                                type="email"
                                placeholder="Digite seu email"
                                onChange={event => setEmail(event.target.value)}
                            />

                            <button 
                                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                                disabled={loading}
                                type="submit"
                            >
                                Garantir minha vaga
                            </button>

                            <Link to={'/event'} className="text-center mt-1 text-gray-400">Já é inscrito? Acesse aqui</Link>
                        </form>
                    </div>
                </div>

                <img src={codeMockup} className="sm:mt-10 px-2 sm:px-0" alt="Code-Mockup" />
            </div>
            <Footer />
        </div>
    )
}