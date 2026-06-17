import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <>

            <div className="flex flex-col items-center justify-center h-100">

                <h1 className="text-8xl mt-20 font-serif text-amber-800">Write down what you feel.</h1>
                <p className="text-5xl my-8 italic text-amber-800/80">Your Personal Writing Space.</p>
                <p className="text-3xl  italic text-amber-800/80">"Think.WRITE.Act."</p>



                <button className='border rounded-xl text-amber-100 flex items-center justify-center gap-3 p-3 mt-15 border-amber-500/60 bg-amber-500/80 hover:bg-amber-500'><Link to='/blog'>Start Blogging</Link><FaArrowRight className='transition duration-200 hover:translate-x-1' /></button>
            </div>

        </>
    )
}