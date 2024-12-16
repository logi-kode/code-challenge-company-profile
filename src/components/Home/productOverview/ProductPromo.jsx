import Image from "next/image"

export default function ProductPromo() {
    return (
        <>
            <div className="bg-white flex justify-center items-center">
                <div className="bg-yellow-100 rounded-md w-[1000px] p-10 mb-5 mt-5">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-green-900">Benefit & Promo</h1>
                        <p className="text-yellow-700 mt-5">for your daily caffeine intake!</p>
                    </div>
                    <div className="flex-row justify-items-center mt-10 lg:flex">
                        <Image src={`/assets/Banner1.jpg`} width={300} height={300} alt="Promo 1" className=" pb-5"/>
                        <Image src={`/assets/Banner2.jpg`} width={300} height={300} alt="Promo 2" className=" pb-5 lg:pl-5"/>
                        <Image src={`/assets/Banner3.jpg`} width={300} height={300} alt="Promo 3" className=" pb-5 lg:pl-5"/>
                    </div>
                </div>
            </div>
        </>
    )
}