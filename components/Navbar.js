'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from './theme-btn'
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [Progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(70)
    }, 100);
    setTimeout(() => {
      setProgress(100)
    }, 300);
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 900);
  })
  return (
    <>
      <nav className='p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10'>
        <LoadingBar
          color="#a855f7"
          progress={Progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className='flex justify-between items-center mx-auto container'>
          <Link href={"/"}><div className='text-lg font-bold'>
            Adroit Blog
          </div>
          </Link>

          <div className={`hidden md:flex space-x-4 gap-6 items-center ${roboto.className}`}>
            <Link href={"/"}>
              <p className='hover:scale-105 transition-transform duration-300 hover:font-semibold '> Home</p>
            </Link>
            <Link href={"/about"}>
              <p className='hover:scale-105 transition-transform duration-300 hover:font-semibold '> About</p>
            </Link>
            <Link href={"/blog"}>
              <p className='hover:scale-105 transition-transform duration-300 hover:font-semibold '> Blog</p>
            </Link>
            {/* <Link href={"/contact"}>
              <p className='hover:scale-105 transition-transform duration-300 hover:font-semibold '> Contact</p>
            </Link> */}
            <div className='flex items-center gap-3'>
              <Button variant="outline">Signup</Button>
              <Button variant="outline">Login</Button>
              <ModeToggle />
            </div>
          </div>

          <div className='md:hidden'>
            <Sheet>
              <span className="mx-2">
                <ModeToggle />
              </span>
              <SheetTrigger>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>AdroitBlog</SheetTitle>
                  <SheetDescription className="font-bold my-4">
                    <div className='flex flex-col gap-6'>
                      <Link href={"/"}>
                        Home
                      </Link>
                      <Link href={"/about"}>
                        About
                      </Link>
                      <Link href={"/blog"}>
                        Blog
                      </Link>
                      {/* <Link href={"/contact"}>
                        Contact
                      </Link> */}
                      <div className='flex flex-col gap-2'>
                        <Button variant="outline">Signup</Button>
                        <Button variant="outline">Login</Button>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
