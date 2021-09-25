import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto flex-col'>
                <Image src='https://links.papareact.com/qd3' 
                layout="fill" 
                objectFit='contain'
                objectPosition='left'/>
            </div>

            {/* /Middle Search */}
            <div className='md:border-2 pl-3 md:p-2 rounded-full md:shadow-sm mx-auto flex items-center w-full'>
                <input type="search" placeholder='Start your Search' className='bg-transparent text-sm text-gray-400 outline-none flex-grow'/>
                <SearchIcon className='h-8 p-2 bg-red-400 rounded-full cursor-pointer text-white hidden md:inline-flex'/>

            </div> 

            {/* Right */}
            <div className=''>
                <div className=' py-2 flex mx-auto items-center justify-end space-x-3 text-sm text-gray-500 text-semibold w-full '>
                    <p className='hidden md:inline'>Become a host</p>
                    <GlobeAltIcon className='h-6 cursor-pointer' />
                    <div className='flex border-2 rounded-full p-2 items-center space-x-2 '>
                        <MenuIcon className='h-6'/>
                        <UserCircleIcon className='h-6'/>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
