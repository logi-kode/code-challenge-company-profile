import Image from "next/image"

export default function HeroBanner() {
    return (
        <>
            <div className="carousel w-full bg-stone-200">
                <div id="slide1" className="carousel-item relative w-full flex flex-col lg:flex-row items-center justify-center">
                    <div className="p-10 text-center lg:p-20 lg:text-left">
                        <h1 className="text-3xl font-bold text-green-800 lg:text-7xl lg:text-left">Grind The Essentials</h1>
                        <br />
                        <p className="text-xl font-light text-lime-600 lg:text-2xl lg:text-left">Dibuat dari biji kopi Indonesia pilihan untuk  pengalaman minum kopi terbaik setiap hari</p>
                    </div>
                    <Image src={`/assets/fore-coffee-sample.png`} width={500} height={200} alt="Fore Coffee Sample" className="h-full"/>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="text-3xl text-green-800 bg-transparent border-none">❮</a>
                        <a href="#slide2" className="text-3xl text-green-800 bg-transparent border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex flex-col lg:flex-row items-center justify-center">
                    <div className="p-10 text-center lg:p-20 lg:text-left">
                        <h1 className="text-3xl font-bold text-green-800 lg:text-7xl">Fore Grind Master 2023</h1>
                        <br />
                        <p className="text-2xl font-light text-lime-600">Kompetisi tahunan bergengsi untuk barista Fore Coffee di seluruh Indonesia</p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=VyRXUnCSXUM"><Image src={`/assets/fore-youtube-video.png`} width={500} height={400} alt="Fore Coffee Sample" className="w-full"/></a>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="text-3xl text-green-800 bg-transparent border-none">❮</a>
                        <a href="#slide3" className="text-3xl text-green-800 bg-transparent border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex flex-col lg:flex-row items-center justify-center">
                    <div className="p-10 text-center lg:p-20 lg:text-left">
                        <h1 className="font-bold text-3xl text-green-800 lg:text-7xl">The 1st Fore<br/> Coffee Store <br/>
                        That Embrace <br/>Sustainability</h1>
                        <br />
                        <p className="text-2xl font-light text-lime-600">Dibuat dari 450kg plastik daur ulang, <br/> berlokasi di Kuningan City, Jakarta</p>
                    </div>
                    <Image src={`/assets/fore-coffee-place.png`} width={500} height={200} alt="Fore Coffee Sample" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="text-3xl text-green-800 bg-transparent border-none">❮</a>
                        <a href="#slide1" className="text-3xl text-green-800 bg-transparent border-none">❯</a>
                    </div>
                </div>
            </div>
        </>
    )
}