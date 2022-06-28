import { CaretRight, FileArrowDown, Image } from "phosphor-react"

interface CardsProps {
    variant: 'material' | 'wallpapers',
}

interface CardContent {
    icon: any,
    title: string,
    content: string,
    url: string
}

export function Cards(props: CardsProps) {
    let card: CardContent; 
    
    switch (props.variant) {
        case 'material':
            card = {
                icon: <FileArrowDown size={40} />,
                title: 'Material complementar',
                content: 'Acesse o material complementar para acelerar o seu desenvolvimento',
                url: 'https://blog.rocketseat.com.br/melhores-sites-para-baixar-imagens-gratuitas-e-outros-recursos/'
            }
            break;
        case 'wallpapers':
            card = {
                icon: <Image size={40} />,
                title: 'Wallpapers exclusivos',
                content: 'Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina',
                url: 'https://www.rocketseat.com.br/ignite'
            }
            break;
    }

    return (
        <a href={card.url} className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 sm:gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
                {card.icon}
            </div>
            <div className="py-6 leading-relaxed sm:text-justify">
                <strong className="text-lg sm:text-2xl ">{card.title}</strong>
                <p className="text-xs sm:text-sm text-gray-200 mt-2">
                    {card.content}
                </p>
            </div>
            <div className="h-full p-6 flex items-center text-blue-500">
                <CaretRight size={24} />
            </div>
        </a>
    )
}