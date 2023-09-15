"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import React from 'react'
import { BsTextIndentRight, BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from 'next-themes'

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <nav className="z-10 w-full items-center flex flex-row justify-between font-mono text-sm lg:flex md-16 pt-3 px-5 lg:px-[15vw]">
            <Link href="/" className="text-2xl font-bold">
                <h2>X-DEV</h2>
            </Link>
            <div className=" justify-center items-center flex gap-5">
                <menu className="hidden md:flex justify-center items-center gap-7 text-center  text-lg font-medium leading-relaxed">
                    <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Contact">Contact</Link>
                    <Link href="/About"><button className="bg-[#5379F6] text-white px-2 rounded-sm text-base active:bg-[#1f316b] duration-200"
                        onClick={() => {
                            console.log("logout")
                        }}
                    >SignUp</button></Link>
                </menu>
                <div className='flex justify-center'>
                    {currentTheme === 'dark' ? (
                        <button
                            className='' onClick={() => setTheme('light')}
                        ><BsFillSunFill />
                        </button>
                    ) : (<button
                        className='' onClick={() => setTheme('dark')}
                    ><BsMoonFill />
                    </button>)} 
                </div>
                <div className="text-[#b1b0b0] text-2xl md:hidden">
                    <BsTextIndentRight />
                </div>
            </div>
        </nav>
    )
}

export default Navbar