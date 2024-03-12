import { ChevronLeft, ChevronRight} from 'lucide-react';
import { Play } from "@phosphor-icons/react/dist/ssr";
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
      <Sidebar/>
        <main className="flex-1 p-6">
          <header className='flex items-center gap-3'>
            <button className='bg-black/40 rounded-full p-2'>
              <ChevronLeft/>
            </button>
            <button className='bg-black/40 rounded-full p-2'>
              <ChevronRight/>
            </button>
          </header>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4'>
            <a href='#' className='w-100 mt-10 bg-white/5 overflow-hidden rounded flex items-center gap-4 hover:bg-white/20 group transition-colors'>
              <Image src='/rosa.jpeg' width={104} height={104} alt='banda rosa de saron'/>
              <p className='font-bold text-zinc-100'>Rosa de saron</p>
              <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible'>
                <Play size={24} weight="fill" />
              </button>
            </a>
            <a href='#' className='w-100 mt-10 bg-white/5 overflow-hidden rounded flex items-center gap-4 hover:bg-white/20 group transition-colors'>
              <Image src='/rosa.jpeg' width={104} height={104} alt='banda rosa de saron'/>
              <p className='font-bold text-zinc-100 ml-6'>Rosa de saron</p>
              <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible'>
                <Play size={24} weight="fill" />
              </button>
            </a>
            <a href='#' className='w-100 mt-10 bg-white/5 overflow-hidden rounded flex items-center gap-4 hover:bg-white/20 group transition-colors'>
              <Image src='/rosa.jpeg' width={104} height={104} alt='banda rosa de saron'/>
              <p className='font-bold text-zinc-100'>Rosa de saron</p>
              <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible'>
                <Play size={24} weight="fill" />
              </button>
            </a>
            <a href='#' className='w-100 mt-10 bg-white/5 overflow-hidden rounded flex items-center gap-4 hover:bg-white/20 group transition-colors'>
              <Image src='/rosa.jpeg' width={104} height={104} alt='banda rosa de saron'/>
              <p className='font-bold text-zinc-100'>Rosa de saron</p>
              <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible'>
                <Play size={24} weight="fill"/>
              </button>
            </a>
            <a href='#' className='w-100 mt-10 bg-white/5 overflow-hidden rounded flex items-center gap-4 hover:bg-white/20 group transition-colors'>
              <Image src='/rosa.jpeg' width={104} height={104} alt='banda rosa de saron'/>
              <p className='font-bold text-zinc-100'>Rosa de saron</p>
              <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible'>
                <Play size={24} weight="fill"/>
              </button>
            </a>
            <a href='#' className='w-100 mt-10 bg-white/5 overflow-hidden rounded flex items-center gap-4 hover:bg-white/20 group transition-colors'>
              <Image src='/rosa.jpeg' width={104} height={104} alt='banda rosa de saron'/>
              <p className='font-bold text-zinc-100'>Rosa de saron</p>
              <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 ml-auto mr-8 text-black invisible group-hover:visible'>
                <Play size={24} weight="fill"/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold mt-10 text-2xl'>Feito para Bianca</h2>

          <div className='grid grid-cols-8 mt-4 gap-4'>
            <a href='#' className='flex-col gap-2 items-center justify-center p-6 bg-white/5 rounded-md hover:bg-white/20 group transition-colors'>
              <Image className='w-full' src='/rosa.jpeg' width={120} height={120} alt='banda rosa de saron'/>
              <h1 className='font-semibold mt-10 text-3xs'>Daily Mix 1</h1>
              <span className='text-xs text-zinc-400'>Trilha semanal</span>
              
            </a>
            <a href='#' className='flex-col gap-2 items-center justify-center p-6 bg-white/5 rounded-md hover:bg-white/20'>
              <Image className='w-full' src='/rosa.jpeg' width={120} height={120} alt='banda rosa de saron'/>
              <h1 className='font-semibold mt-10 text-3xs'>Daily Mix 2</h1>
              <span className='text-xs text-zinc-400'>Sandy, Marisa Monte, Tribalistas e muito mais</span>
            </a>
            <a href='#' className='flex-col gap-2 items-center justify-center p-6 bg-white/5 rounded-md hover:bg-white/20'>
              <Image className='w-full' src='/rosa.jpeg' width={120} height={120} alt='banda rosa de saron'/>
              <h1 className='font-semibold mt-10 text-3xs'>Daily Mix 3</h1>
              <span className='text-xs text-zinc-400'>Mariana Nolasco, Clarice Falcão...</span>
            </a>
            <a href='#' className='flex-col gap-2 items-center justify-center p-6 bg-white/5 rounded-md hover:bg-white/20'>
              <Image className='w-full' src='/rosa.jpeg' width={120} height={120} alt='banda rosa de saron'/>
              <h1 className='font-semibold mt-10 text-3xs'>Daily Mix 4</h1>
              <span className='text-xs text-zinc-400'>Frei Gilson, Eliane Ribeiro, Fátima Sousa...</span>
            </a>
            <a href='#' className='flex-col gap-2 items-center justify-center p-6 bg-white/5 rounded-md hover:bg-white/20'>
              <Image className='w-full' src='/rosa.jpeg' width={120} height={120} alt='banda rosa de saron'/>
              <h1 className='font-semibold mt-10 text-3xs'>Daily Mix 5</h1>
              <span className='text-xs text-zinc-400'>Rosa de Saron, Colo de Deus, Davidson Silva... </span>
            </a>
          </div>
        </main>
      </div>
     <Footer/>
    </div>
  );
}
