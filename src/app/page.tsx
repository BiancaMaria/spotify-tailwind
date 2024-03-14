import { ChevronLeft, ChevronRight} from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { FirstCard } from '@/components/FirstCard';
import { Card } from '@/components/Card';

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
            <FirstCard/>
          </div>

          <h2 className='font-semibold mt-10 text-2xl'>Feito para Bianca</h2>
          <div className='grid grid-cols-8 pt-4 mt-4 gap-4'>
            <Card/>
          </div>
        </main>
      </div>
     <Footer/>
    </div>
  );
}
