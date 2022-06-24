import { LogoRocketseat } from "./LogoRocketseat";

export function Footer() {
    return (
        <div className="py-5 mx-6 border-t border-gray-600 flex items-center gap-6">
            <LogoRocketseat />
            <div className="text-gray-300  w-full flex items-center justify-between">
                <span>Rocketseat - Todos os direitos reservados</span>
                <span>Políticas de privacidade</span>
            </div>
        </div>
    )
}