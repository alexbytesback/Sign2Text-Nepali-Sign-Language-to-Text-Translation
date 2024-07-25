import React from 'react'
import Image from 'next/image'
import './app/globals.css'

import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './app/components/Footer'
import  Logo   from './app/components/Logo'

import { Analytics } from "@vercel/analytics/react"


const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center gap-1 font-bold">
      <Logo className="h-6 font-bold" />
      Sign2Text
      <Analytics />
    </div>),
  project: {
    link: 'https://github.com/alexbytesback/Nepali_Sign_Language_To_Text_Translation',
  },
  primaryHue: {
    dark: 32,
    light: 32
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Sign2Text",
    }
  },
  docsRepositoryBase: 'https://github.com/alexbytesback/Nepali_Sign_Language_To_Text_Translation',
  footer: {
    text: <Footer />
  },
  banner: {
    key: '#',
    text: (
      <a href="https://github.com/alexbytesback/Nepali_Sign_Language_To_Text_Translation" target="_blank">
        🔍 Bridging Language: Sign2text Converts Nepali Sign Language to Text
      </a>
    )
  }
}

export default config
