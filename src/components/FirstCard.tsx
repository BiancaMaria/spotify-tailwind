import { Play } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const card =  [
    {
        "id":1,
        "imagem": "/kidabelha3.jpeg",
        "titulo":"Top Brasil",
    },
    {
        "id":2,
        "imagem": "/sandy.jpeg",
        "titulo":"Mix Animado",
    },
    {
        "id":3,
        "imagem": "/pitty2.jpeg",
        "titulo":"Rock Nacional",
    },
    {
        "id":4,
        "imagem": "/gilson.jpeg",
        "titulo":"Louvor e Adoração",
    },
    {
        "id":5,
        "imagem": "/rosa3.jpeg",
        "titulo":"Rock Católico",
    },

]

export function FirstCard() {
    return(
        <>
        {card.map(card =>(
            <a href='#' className='w-100 mt-10 bg-white/5 overflow-hidden rounded flex items-center gap-4 hover:bg-white/20 group transition-colors'>
                <Image src={card.imagem} width={104} height={104} alt={card.titulo}/>
                <p className='font-bold text-zinc-100'>{card.titulo}</p>
                <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible'>
                <Play size={24} weight="fill" />
                </button>
            </a>
        ))}
        </>
    )
}