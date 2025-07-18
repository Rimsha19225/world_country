'use client'

import Image from "next/image"
import Link from "next/link"

const countries = [
  {
    name: "Pakistan",
    img: "/images/pak.jpg",
    link: "/pakistan"
  },
  {
    name: "India",
    img: "/images/india.jpg",
    link: "/india"
  },
  {
    name: "Bangladesh",
    img: "/images/bangladesh.jpg",
    link: "/bangladesh"
  },
  {
    name: "Iran",
    img: "/images/iran.jpg",
    link: "/iran"
  },
  {
    name: "Afghanistan",
    img: "/images/afghan.jpg",
    link: "/afghan"
  },
  {
    name: "China",
    img: "/images/china.jpg",
    link: "/china"
  },
  {
    name: "America",
    img: "/images/imerica.webp",
    link: "/america"
  },
  {
    name: "Nepal",
    img: "/images/nepal.jpg",
    link: "/nepal"
  },
  {
    name: "Brazil",
    img: "/images/brazil.jpg",
    link: "/brazil"
  },
  {
    name: "Oman",
    img: "/images/oman.jpg",
    link: "/oman"
  },
  {
    name: "Qatar",
    img: "/images/qatar.jpg",
    link: "/qatar"
  },
  {
    name: "Russia",
    img: "/images/russia.jpg",
    link: "/russia"
  },
  {
    name: "Egypt",
    img: "/images/egypt.jpg",
    link: "/egypt"
  },
  {
    name: "Fiji",
    img: "/images/fiji.jpg",
    link: "/fiji"
  },
  {
    name: "Germany",
    img: "/images/germany.jpg",
    link: "/germany"
  },
  {
    name: "Togo",
    img: "/images/togo.jpg",
    link: "/togo"
  },
  {
    name: "Uganda",
    img: "/images/uganda.jpg",
    link: "/uganda"
  },
  {
    name: "Korea",
    img: "/images/korea.jpg",
    link: "/korea"
  },
  {
    name: "Laos",
    img: "/images/laos.jpg",
    link: "/laos"
  },
  {
    name: "Libya",
    img: "/images/libya.jpg",
    link: "/libya"
  },
  {
    name: "Zambia",
    img: "/images/zambia.jpg",
    link: "/zambia"
  },
  {
    name: "Kenya",
    img: "/images/kenya.jpg",
    link: "/kenya"
  },
  {
    name: "Yemen",
    img: "/images/yemen.jpg",
    link: "/yemen"
  },
  {
    name: "Iraq",
    img: "/images/iraq.jpg",
    link: "/iraq"
  },
  {
    name: "Jamaica",
    img: "/images/jamacia.jpg",
    link: "/jamaica"
  },
  {
    name: "Italy",
    img: "/images/italy.jpg",
    link: "/italy"
  },
  {
    name: "Iceland",
    img: "/images/iceland.jpg",
    link: "/iceland"
  },
  {
    name: "Greece",
    img: "/images/greece.jpg",
    link: "/greece"
  },
]

export default function Home() {
  return (
    <div className="p-2 md:p-10">
      <div className="w-full max-w-[95%] md:max-w-[80%] m-auto grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-6 mt-10">
        {countries.map((country, idx) => (
          <div key={idx} className="w-full h-auto bg-slate-300 rounded py-2 px-1 transition duration-300 hover:scale-105">
            <h2 className="text-center font-semibold p-1">{country.name}</h2>
            <Image
              src={country.img}
              alt={country.name}
              width={176}
              height={112}
              className="w-full h-28 object-cover rounded"
            />
            <Link href={country.link}>
              <button className="text-center mt-1 font-semibold w-full hover:text-red-500 hover:font-semibold">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
