import Image from "next/image"
import TestimonyCard from "./TestimonyCard"
import db from '../../../../db/db.json'

export default function TestimonyOverview() {
    return (
        <>
            <div>
                <div className="flex justify-center items-center mt-10">
                    <Image src={`/assets/matcha-ice.png`} width={100} height={100} alt="Matcha ice" className="mt-10"/>
                    <div className="text-center">
                        <h1 className="text-5xl text-green-900 font-bold">What They Say About</h1>
                        <div className="border border-dashed w-auto rounded-full mt-5 p-5 border-lime-200 mb-5">
                            <p className="text-lime-300">Our Successful Collaboration</p>
                        </div>
                    </div>
                    <Image src={`/assets/Sunny-Citrus-Jasmine.png`} width={100} height={100} alt="Sunny Citrus Jasmine" className="mb-10"/>
                </div>
                <div className="grid gap-4 p-9 lg:grid-cols-4">
                    {db?.testimony?.map((testimony, index) => {
                        return <TestimonyCard key={index} {...testimony}/>
                    })}
                </div>
            </div>
        </>
    )
}