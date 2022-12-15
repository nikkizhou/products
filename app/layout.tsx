/* eslint-disable @next/next/no-head-element */
import './globals.css';
import React from 'react'
import '../styles/globals.css'
import { PropsWithChildren } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Providers from "./providers/Providers";


type Props = PropsWithChildren;

export default function RootLayout({ children, }: Props){

  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}