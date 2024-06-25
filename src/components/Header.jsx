

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
                    <h1 className='ml-2 text-xl font-semibold' >
                        take it easy
                    </h1>
                </div>
                <nav className='flex items-center' >
                    <a href='#' className='ml-8 text-lg' >
                        Pricing
                    </a>
                    <a href='#' className='ml-8 text-lg' >
                        About us
                    </a>
                    <a href='#' className='ml-8 text-lg' >
                       Login
                    </a>
                    
                </nav>
            </div>

        </header >
    );
}

export default Header;