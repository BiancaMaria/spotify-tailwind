import { HomeIcon, Search, Library } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-red-500 rounded-full'></div>
          <div className='w-4 h-4 bg-yellow-500 rounded-full'></div>
          <div className='w-4 h-4 bg-green-500 rounded-full'></div>
        </div>
        {/* margin-top */}
        <nav className='space-y-5 mt-10'>
          <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
            <HomeIcon/>
            Home
          </a>
          <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
            <Search/>
            Search
          </a>
          <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
            <Library/>
            Your library
          </a>
        </nav>
        {/* padding-top border-top */}
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Acústico MPB</a>  
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Católicas</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Louvando e louça</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Danilo Casemiro</a>
        </nav>
      </aside>
    )
}