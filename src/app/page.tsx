import Image from "next/image"
import Link from "next/link"
import pak from "../../public/images/pak.jpg"
import ind from "../../public/images/india.jpg"
import ban from "../../public/images/bangladesh.jpg"
import iran from "../../public/images/iran.jpg"
import afghan from "../../public/images/afghan.jpg"
import china from "../../public/images/china.jpg"
import american from "../../public/images/imerica.webp"
import nepal from "../../public/images/nepal.jpg"
import brazil from "../../public/images/brazil.jpg"
import oman from "../../public/images/oman.jpg"
import qatar from "../../public/images/qatar.jpg"
import russia from "../../public/images/russia.jpg"
import egypt from "../../public/images/egypt.jpg"
import fiji from "../../public/images/fiji.jpg"
import germany from "../../public/images/germany.jpg"
import togo from "../../public/images/togo.jpg"
import uganda from "../../public/images/uganda.jpg"
import korea from "../../public/images/korea.jpg"
import laos from "../../public/images/laos.jpg"
import libya from "../../public/images/libya.jpg"
import zambia from "../../public/images/zambia.jpg"
import kenya from "../../public/images/kenya.jpg"
import yemen from "../../public/images/yemen.jpg"
import iraq from "../../public/images/iraq.jpg"
import jamacia from "../../public/images/jamacia.jpg"
import italy from "../../public/images/italy.jpg"
import iceland from "../../public/images/iceland.jpg"
import greece from "../../public/images/greece.jpg"


export default function Home() {
  return(
    <div>
    <div className="grid grid-cols-7 gap-6 mt-10 p-10 whitespace-nowrap">
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Pakistan</h2>
        <Image src={pak} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href="/pakistan"><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">India</h2>
        <Image src={ind} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/india"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Bangladesh</h2>
        <Image src={ban} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/bangladesh"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Iran</h2>
        <Image src={iran} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/iran"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Afghanistan</h2>
        <Image src={afghan} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/afghan"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">China</h2>
        <Image src={china} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/china"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">America</h2>
        <Image src={american} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/america"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Nepal</h2>
        <Image src={nepal} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/nepal"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Brazil</h2>
        <Image src={brazil} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/brazil"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Oman</h2>
        <Image src={oman} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/oman"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Qatar</h2>
        <Image src={qatar} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/qatar"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Russia</h2>
        <Image src={russia} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/russia"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Egypt</h2>
        <Image src={egypt} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/egypt"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Fiji</h2>
        <Image src={fiji} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/fiji"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Germany</h2>
        <Image src={germany} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/germany"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Togo</h2>
        <Image src={togo} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/togo"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Uganda</h2>
        <Image src={uganda} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/uganda"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Korea</h2>
        <Image src={korea} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/korea"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Laos</h2>
        <Image src={laos} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/laos"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Zambia</h2>
        <Image src={zambia} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/zambia"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Libya</h2>
        <Image src={libya} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/libya"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Kenya</h2>
        <Image src={kenya} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/kenya"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Yemen</h2>
        <Image src={yemen} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/yemen"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Iraq</h2>
        <Image src={iraq} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/iraq"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Jamacia</h2>
        <Image src={jamacia} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/jamaica"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Italy</h2>
        <Image src={italy} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/italy"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Iceland</h2>
        <Image src={iceland} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/iceland"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
      <div className="w-44 h-44 bg-slate-300 rounded ">
        <h2 className="text-center font-semibold p-1">Greece</h2>
        <Image src={greece} alt="pak" width={100} height={100} className="w-screen h-28 rounded"/>
        <Link href={"/greece"}><button className="text-center mt-1 font-semibold w-40">Read More</button></Link>
      </div>
    </div>
  </div>
  )
}
