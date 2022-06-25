import { LogoRocketseat } from "./LogoRocketseat";

export function Footer() {
    return (
        <div className="py-5 px-6 bg-gray-900 border-t border-gray-600 flex flex-col sm:flex-row items-center text-gray-300 w-full gap-6">
            <LogoRocketseat />
            <span>Rocketseat - Todos os direitos reservados</span>
            <span className="sm:ml-auto">Políticas de privacidade</span>
        </div>
    )
}