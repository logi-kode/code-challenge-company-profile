import Image from "next/image"

export default function ProductCard(props) {
    return (
        <>
            <div className="flex flex-col p-10 m-5 border rounded-xl shadow-lg">
                <div className="flex justify-center">
                    <Image src={props.image} width={200} height={200} alt="Fore Coffee" className="rounded-md" />
                </div>
                <div className="mt-5 text-center">
                    <h1 className="font-bold text-xl">{props.name}</h1>
                    <h2 className="text-amber-700 font-medium">Rp. {props.price}</h2>
                    <p className="font-light text-gray-400">{props.description}</p>
                </div>
            </div>
        </>
    )
}