import Image from "next/image"

export default function CompanyOverview() {
    return (
        <>
            <h1 className="text-green-800 text-5xl font-bold pt-10 text-center lg:text-left lg:text-7xl lg:ml-24">Our Story</h1>
            <div className="lg:flex flex-row items-center justify-center">
                <Image src={`/assets/fore-coffee-sample-2.png`} width={600} height={200} alt="Fore Coffee Sample 2" className="p-5 lg:w-full lg:pl-20" />
                <div>
                    <p className="m-10 lg:text-xl">
                        Established in 2018, Fore Coffee is a passionate coffee startups aiming to brew the best specialty coffee for our customer. As our name derived from the word forest, we aim to grow fast, strong, tall and bring life to our surrounding. We want our existence to increase coffee quality for our  community.
                        <br />
                        <br />
                        Leveraging network and experience, we are using the latest tech for our tools and bean blend. Directly from the selected farmer, high-quality beans are processed and roasted to perfection by ourselves then passed on to our skilled barista, excitedly prepare the cup of happiness to be served to you especially.
                    </p>
                    <div className="text-center lg:ml-10 lg:text-left">
                        <button className="btn bg-green-800 text-white rounded-full w-[150px] hover:bg-transparent hover:text-green-800 hover:border-green-800">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}