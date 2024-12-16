import Image from "next/image"

export default function TestimonyCard(props) {
    return (
        <>
            <div className="border-base relative rounded-xl border-slate-500 bg-white p-4 text-justify leading-relaxed text-shuttlegray shadow-2xl">
                <div className="avatar flex justify-center">
                    <div className="w-16 ">
                        <Image
                            src={props.image}
                            width={50}
                            height={50}
                            alt="testi"
                            className="rounded-full"
                        />
                    </div>
                </div>
                <h1 className="flex justify-center py-3 pb-2 text-sm font-bold">
                    {props.name}
                </h1>
                <p className="py-3 pb-2 pt-1 text-xs font-light text-center">
                    {props.title}
                </p>
                <p className="py-3 text-sm leading-relaxed">
                    {props.description}
                </p>
            </div>
        </>
    )
}