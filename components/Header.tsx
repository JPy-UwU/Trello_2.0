'use client'

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from 'react-avatar';

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
          className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50"
        />
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center flex-1 space-x-5 justify-end w-full">

          {/* Search Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" placeholder="Search" className="flex-1 outline-none p-2" />
            <button type="submit" hidden>Search</button>
          </form>

          {/* Avatar */}
          {/* <Avatar name="Jay Patel" round size="50" color="#0055d1" /> */}
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center p-5 py-2 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1] mr-1" />
          ChatGPT Connecting...
        </p>
      </div>
    </header>
  )
}

export default Header