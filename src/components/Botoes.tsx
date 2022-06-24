import { DiscordLogo, Lightning } from "phosphor-react";

interface BotoesProps {
    variant: 'discord' | 'desafio',
}

export function Botoes(props: BotoesProps) {
    switch (props.variant) {
        case "discord":
            return (
                <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                    <DiscordLogo size={24} />
                    Comunidade do Discord
                </a>
            )
        case "desafio":
            return (
                <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                    <Lightning  size={24} />
                    Acesse o desafio
                </a>
            )
    }
}