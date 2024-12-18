import ProductCard from "./ProductCardOverview";
import db from "../../../../db/db.json"

export default function ProductOverview() {
    return (
        <>
            <div className="bg-white">
                <div>
                    <h1 className="text-center font-bold text-3xl text-green-900">Fore Best Products</h1>
                </div>
                <div className="grid grid-cols-3">
                    {db?.coffee_overview?.map((coffee, index) => {
                        return <ProductCard key={index} {...coffee} />
                    })}
                </div>
                <div className="flex justify-center">
                    <button className="btn bg-green-900 text-white w-[100px] hover:bg-white hover:text-green-900 hover:border-green-900">More</button>
                </div>
            </div>
        </>
    )
}