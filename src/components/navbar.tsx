import Image  from 'next/image';
import Link from 'next/link';
import world from "../../public/images/world_ball.jpg"
const Navbar = () => {
  return (
    <div className="w-full h-20 bg-slate-300 flex justify-between">
      <div className='flex'>
        <div>
        <Image src={world} alt='worldMapBall' width={120} height={120} className='mt-3 ml-5'/>
        </div>
        <h1 className="text-center text-4xl mt-5 font-semibold text-black ml-10 font-mono">World Country</h1>
      </div>
      <div className='flex justify-center gap-10 font-semibold mt-6 mr-10 text-xl'>
      <Link href={"/"}>Home</Link>
      <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
