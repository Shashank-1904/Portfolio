import React from 'react'
import logo from './../assets/Images/logo.png'
import { navItems } from './../assets/utils/Data';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
    const [mobileDrawer, setMobileDrawer] = useState(false);

    const toggleNav = () =>
    {
        setMobileDrawer(!mobileDrawer);
    }
  return (  
      <nav className='sticky top-0 z-50 py-3 border-b border-neutral-700/80 bg-primary'>
        <div className='container mx-auto px-4 relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-0'>
                    <img className="h-15 w-40 mr-2" src={logo} alt="logo"/>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index} className='hover:text-secondary'>
                            <a className='text-md-800' href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNav}>
                        {mobileDrawer ? <X/> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileDrawer && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-4' onClick={toggleNav}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
      </nav>
  )
}

export default Navbar
