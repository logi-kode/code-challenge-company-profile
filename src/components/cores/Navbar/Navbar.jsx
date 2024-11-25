import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-stone-200 p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Image src="https://fore.coffee/wp-content/uploads/2014/12/Logo-2.png" width={80} height={80} alt="Fore Coffee" className="lg:ml-5" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-green-800 font-bold text-base">
                        <li><a>Tentang</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Kolaborasi</a></li>
                        <li><a>Store</a></li>
                        <li><a>Karir</a></li>
                        <li><a>Hubungi Kami</a></li>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="m-2 bg-transparent border-none">🇮🇩 ID</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>🇸🇬 SG (Singapore)</a></li>
                                <li><a>🇮🇩 ID (Indonesia)</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-transparent border-green-800 rounded-full text-green-800 hover:bg-green-800 hover:text-white">Download App</a>
                    <a className="ml-5 mr-5"><b className="text-gray-400">EN</b> | <b className="text-green-800">ID</b></a>
                </div>
            </div>
        </>
    )
}