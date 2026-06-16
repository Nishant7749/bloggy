import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <>
         <nav className='flex items-center justify-between bg-amber-500 p-4'>
            <h1 className='text-lg font-mono font-bold text-amber-900'>bloggy</h1>

            <div className='flex gap-8'>
                <Link className='text-amber-700 hover:text-amber-900 cursor-pointer' to='/'>Home</Link>
                <Link className='text-amber-700 hover:text-amber-900 cursor-pointer' to='/blog'>Blog</Link>
                <Link className='text-amber-700 hover:text-amber-900 cursor-pointer' to='/history'>History</Link>
                <Link className='text-amber-700 hover:text-amber-900 hover:border-amber-900 cursor-pointer border border-amber-600/80 rounded-md p-1 bg-amber-600/60' to='/register'>Register</Link>

            </div>
         </nav>
        </>
    )
}