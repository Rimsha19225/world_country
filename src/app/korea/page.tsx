import Link from "next/link"

const Korea = () => {
  return (
    <div>
      <h1 className="text-center text-5xl mt-16">Korea</h1>
      <div className="w-[100%] max-w-[95%] md:max-w-[60%] m-auto py-10 text-justify font-medium">
        <p>Korea refers to a region in East Asia, historically unified as the Korean Peninsula, which is now divided into two countries: North Korea (officially the Democratic People Republic of Korea, or DPRK) and South Korea (officially the Republic of Korea, or ROK). The peninsula is bordered by China to the northwest, Russia to the northeast, and Japan to the east, with coastlines along the Yellow Sea and the Sea of Japan (East Sea).</p>
        <Link href={"/korea/north"}><button className="text-center mt-1 font-semibold w-40 text-blue-500">👉Click North Korea</button></Link>
        <br />
        <Link href={"/korea/south"}><button className="text-center mt-1 font-semibold w-40 text-blue-500">👉Click South Korea</button></Link>
        <p>The division of Korea into North and South stems from the end of World War II when Japan defeat led to the occupation of Korea by the Soviet Union in the north and the United States in the south. In 1948, two separate Korean governments were established, and the Korean War (1950–1953) solidified the division, with a ceasefire agreement but no peace treaty, leaving both countries technically still at war. The Demilitarized Zone (DMZ) separates North and South Korea, and despite periods of diplomatic engagement, the two remain distinct, with different political systems, economies, and international relations.</p>
        <p>Today, Korea as a whole represents a blend of tradition and modernity, with the northern region maintaining a rigid, isolated stance and the southern region being a global economic and cultural powerhouse.</p>
        <p></p>
      </div>
    </div>
  )
}

export default Korea
