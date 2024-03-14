import Image from 'next/image';

const card =  [
    {
        "id":1,
        "imagem": "/kidabelha3.jpeg",
        "titulo":"Daily Mix 1",
        "subtitulo":"Kid Abelha, Melin, Maneva"
    },
    {
        "id":2,
        "imagem": "/sandy.jpeg",
        "titulo":"Daily Mix 2",
        "subtitulo":"Sandy, Marisa Monte, Tribalistas e muito mais"
    },
    {
        "id":3,
        "imagem": "/pitty2.jpeg",
        "titulo":"Daily Mix 3",
        "subtitulo":"Pitty, Engenheiros do Havaí, Roberta Campos..."
    },
    {
        "id":4,
        "imagem": "/gilson.jpeg",
        "titulo":"Daily Mix 4",
        "subtitulo":"Frei Gilson, Eliane Ribeiro, Fátima Sousa..."
    },
    {
        "id":5,
        "imagem": "/rosa3.jpeg",
        "titulo":"Daily Mix 5",
        "subtitulo":"Rosa de Saron, Colo de Deus, Davidson Silva... "
    },

]


export function Card() {
    return(
        <>
            {card.map(card => (
                <a key={card.id} href='#' className='flex-col gap-2 items-center justify-center p-6 bg-white/5 rounded-md hover:bg-white/20 group transition-colors'>
                    <Image className='w-full' src={card.imagem} width={120} height={120} alt={card.titulo}/>
                    <h1 className='font-semibold mt-10 text-3xs'>{card.titulo}</h1>
                    <span className='text-xs text-zinc-400'>{card.subtitulo}</span>
                </a>
            ))}
        </>
        
    )
}