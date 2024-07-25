import React from 'react'
import Image from 'next/image'
import './app/globals.css'

import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './app/components/Footer'
import { Logo } from './app/components/Logo'

import { Analytics } from "@vercel/analytics/react"


const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center gap-1 font-bold">
      <Logo className="h-6" />
      Sign2Text
      <Analytics />
    </div>),
  project: {
    link: '#',
  },
  primaryHue: {
    dark: 32,
    light: 32
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Sign2Text"
    }
  },
  docsRepositoryBase: '#',
  footer: {
    text: <Footer />
  },
  banner: {
    key: '#',
    text: (
      <a href="#" target="_blank">
       
      </a>
    )
  }
}

export default config
