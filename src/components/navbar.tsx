import Image  from 'next/image';
import Link from 'next/link';
import world from "../../public/images/world_ball.jpg"
const Navbar = () => {
  return (
    <div className="w-full h-14 md:h-20 bg-slate-300">
      <div className='max-w-[90%] m-auto flex items-center justify-between'>
        <div className='flex justify-between'>
            <Image src={world} alt='worldMapBall' width={120} height={120} className='w-[4.5rem] md:w-[6.5rem] h-[5rem] md:h-[7rem] mt-3'/>
            <h1 className="hidden md:block text-center text-4xl mt-5 font-semibold text-black ml-10 font-mono">World Country</h1>
        </div>
        <div className='flex gap-10 font-semibold text-[1rem] md:text-[1.5rem] mb-8 md:mb-10'>
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
