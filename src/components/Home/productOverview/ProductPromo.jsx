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
                    <div className="flex justify-between mt-10">
                        <Image src={`/assets/Banner1.jpg`} width={300} height={300} alt="Promo 1" className="rounded-lg"/>
                        <Image src={`/assets/Banner2.jpg`} width={300} height={300} alt="Promo 2" className="rounded-lg"/>
                        <Image src={`/assets/Banner3.jpg`} width={300} height={300} alt="Promo 3" className="rounded-lg"/>
                    </div>
                </div>
            </div>
        </>
    )
}