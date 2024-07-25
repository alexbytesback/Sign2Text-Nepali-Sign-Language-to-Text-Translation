import './globals.css';
import { Rubik } from 'next/font/google'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';

const rubik = Rubik({
    subsets: [
        'latin'
    ],
    adjustFontFallback: false
});

export const metadata = {
    title: 'Sign2Text :: Sign your words, Inspire the world',
    description: "Uniting Gestures to Empower Seamless Communication, Transforming Accessibility with Artificial Intelligence",
    openGraph: {
        title: "Sign2Text :: Sign your words, Inspire the world",
        description: "Uniting Gestures to Empower Seamless Communication, Transforming Accessibility with Artificial Intelligence",
        url: "#",
        siteName: "Sign2Text",
        images: [
            {
                url: '#',
                width: 1200,
                height: 630,
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sign2Text :: Sign your words, Inspire the world',
        description: 'Uniting Gestures to Empower Seamless Communication, Transforming Accessibility with Artificial Intelligence',
        creator: '@prashant',
        images: ['#'], // Must be an absolute URL
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${rubik.className}`}>
                <NavBar />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    )
}
