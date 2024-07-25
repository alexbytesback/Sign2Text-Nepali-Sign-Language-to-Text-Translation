import Link from "next/link"
import { siteConfig } from "../config"

export const Footer = () => {
    return (
        <section className='p-8 md:p-16 flex justify-center items-center'>
            <p>©Developed by <Link href={siteConfig.links.author} className='text-green-500 font-dm-sans  underline underline-offset-4'>Team Utopia</Link>. 
            The source code is available on <Link href={siteConfig.links.github} className='text-green-500 font-dm-sans underline underline-offset-4'>GitHub</Link>.</p>
        </section>
    )
}