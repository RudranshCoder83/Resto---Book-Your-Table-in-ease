import { useState } from 'react'
import { navLinks } from '../data/data'
import { Menu as MenuIcon, XIcon } from 'lucide-react' // Ya aapka custom icon import
import { useEffect } from 'react';

const NavBar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav
                className={`fixed left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ease-in-out ${scrolled
                    ? 'top-4 w-[92%] max-w-5xl rounded-full bg-white/60 backdrop-blur-lg shadow-lg'
                    : 'top-0 w-full bg-transparent'
                    }`}
            >
                <div
                    className={`flex items-center justify-between font-medium mx-auto transition-all duration-500 ${scrolled ? 'max-w-full py-2 pl-6 pr-2' : 'max-w-7xl py-4 px-4'
                        }`}
                >
                    <a href="">
                        <img src="/assets/logo.svg" alt="logo" />
                    </a>

                    {/* Desktop Navigation links*/}
                    <div className='hidden md:flex items-center gap-10'>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className='hover:text-zinc-600'>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <a href="#booking-process" className='hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition '>
                        Book a Table
                    </a>

                    <button onClick={() => setMobileOpen(true)} className='md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square flex items-center justify-center'>
                        <MenuIcon />
                    </button>
                </div>
            </nav>

            {/* mobile navigation drawer */}
            <div className={`flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} `}>
                <div className='flex flex-col items-center space-y-6 font-medium'>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className='text-2xl text-zinc-800 hover:text-orange-500 transition'>
                            {link.name}
                        </a>
                    ))}
                    <button onClick={() => setMobileOpen(false)} className='bg-zinc-800 text-white p-2 rounded-md aspect-square'>
                        <XIcon />
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar