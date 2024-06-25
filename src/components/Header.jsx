

function Header() {
    return (
        <header className='fixed
        top-0
        left-0
        h-20
        w-full
        bg-transparent
        backdrop-blur-md' >
            <div className='flex
        items-center
        justify-between
        h-full
        px-4
        mx-auto
        max-w-7xl' >
                <div className='flex items-center' >
                    <h1 className='ml-2 text-xl font-semibold
                    bg-gradient-to-b from-[#4FACFE] from-21%
                    to-[#00F2FE] bg-clip-text text-transparent' >
                        take it easy
                    </h1>
                </div>
                <nav className='flex items-center ' >
                    <a href='#' className='ml-8 text-base text-[#6C7580]' >
                        Pricing
                    </a>
                    <a href='#' className='ml-8 text-base text-[#6C7580]' >
                        About us
                    </a>
                    <a href='#' className='ml-8 text-base text-[#6C7580]' >
                        Login
                    </a>
                    <a href='#' className='ml-8 text-base h-10 
                    bg-gradient-to-r from-[#00F2FE] from-21%
                    to-[#4FACFE]
                    px-6
                    flex items-center rounded-full' >
                        <p className='text-white font-medium' >
                            Get Started
                        </p>
                    </a>
                </nav>
            </div>

        </header >
    );
}

export default Header;