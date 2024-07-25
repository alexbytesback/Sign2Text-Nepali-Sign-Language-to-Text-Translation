import Link from "next/link";
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa6";
import { siteConfig } from "../config";

export const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <div className='flex gap-6 h-full items-center'>
                    <Link href={'/'}>
                        <div className="flex items-center gap-1 font-dm-sans ">
                            <Logo className="h-6" />
                            Sign2Text
                        </div>
                    </Link>
                </div>

                <div className="flex gap-4 items-center">
                <Link href={"/docs"}>
                        <button className="btn px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transform transition-transform duration-300 ease-in-out hover:scale-105">
                            Read Docs
                        </button>
                    </Link>
                    <Link href={siteConfig.links.github}>
                    <FaGithub className="h-6 w-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-600" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
