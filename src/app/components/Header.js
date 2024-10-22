import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-blue-100 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-evenly items-center">
                <Link href="/">
                    <Image width={144} height={144} style={{ width: '100%', height: 'auto' }}
                    src={"https://readymadeui.com/readymadeui.svg"} alt="logo" className='w-36' priority={true} />
                </Link>
                <div className="text-xl font-bold hover:text-[#007bff]">
                    <Link href="/">My Website</Link>
                </div>

                <nav className="flex space-x-4">
                    <Link href="/" className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px] hover:font-bold'>Home</Link>
                    <Link href="/about" className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px] hover:font-bold'>About</Link>
                    <Link href='/about/us'
                       className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>AboutUs</Link>
                    <Link href="/contact" className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px] hover:font-bold'>Contact</Link>
                    <Link href='/contactUs'
                        className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px] hover:font-bold'>ContactUs</Link>
                    <Link href="/products" 
                        className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px] hover:font-bold'>Products</Link>
                </nav>

                <div className="flex space-x-4 hover:text-[#007bff] font-bold">
                    <Link href="/cart">Cart</Link>
                </div>
            </div>
        </header>
    );
}
