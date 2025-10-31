import Header from "../components/Header"
import Spacer from "../components/UI/Spacer"

const HeroSeection =() => {

    return(
        <section className="w-screen bg-blue-200  h-2/4 ">
            <Spacer/>
            <div className=" leading-tight text-[1.2rem] text-center p-4 h-1/2">
                <p>Sunny Jha is an independent</p>
                <p>software engineer his work is focused</p>
                <p>on building scalable application.</p>
                <p>He's commited to grow </p>
                <p>personally and professionally</p>
            </div>
            <Spacer/>
        </section>
    )
}





export default function Home(){

    return(
        <div className="w-screen bg-amber-950 h-screen">
            <Header/>
            <HeroSeection/>
        </div>
    )
}