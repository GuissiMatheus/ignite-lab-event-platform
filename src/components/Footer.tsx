import { LogoRocketseat } from "./LogoRocketseat";

import gitHub from "../assets/gitHub-mark-64px.png"
import linkedIn from "../assets/linkedIn-logo.png"

export function Footer() {
    return (
        <div className="py-5 px-6 bg-gray-900 border-t border-gray-600 flex flex-col sm:flex-row items-center text-gray-300 w-full gap-5">
            <a href="https://www.rocketseat.com.br/" target="_blank">
                <LogoRocketseat />
            </a>
            <span>Todos os direitos reservados</span>
            <a href="https://www.rocketseat.com.br/privacy/" target="_blank">
                <span>Políticas de privacidade</span>
            </a>
            <span className="sm:ml-auto sm:-mr-3">Desenvolvido por <strong className="text-blue-500">Matheus Guissi</strong></span>
            <span className="flex gap-6 sm:gap-3">
                <a href="https://github.com/guissimatheus/event-platform-react#readme" target="_blank">
                    <img src={gitHub} className="h-8" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/guissimatheus/" target="_blank">
                    <img src={linkedIn} className="h-8 rounded" alt="LinkedIn" />
                </a>
            </span>
        </div>
    )
}
