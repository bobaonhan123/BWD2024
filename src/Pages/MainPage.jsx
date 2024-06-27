import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function MainPage() {
    return (
        <div className='pt-11 w-full min-h-screen'>
            <div className='w-full flex flex-col items-center'>
                <h1 className='font-semibold text-7xl mt-28 mb-10'>
                    <p className='bg-gradient-to-r
                    from-[#00F2FE] from-21%
                to-[#4FACFE] bg-clip-text text-transparent
                h-28'>
                    Boost your vocabulary</p>
                    <p className='text-[#4B5563] h-24'>
                    and language skills with us</p>
                </h1>
                <div className='
                flex items-center 
                justify-center
                w-full'>
                    <p className='text-[#6C7580] text-lg mx-4'>
                        <FontAwesomeIcon icon={faCircleCheck} className='text-[#4FACFE] w-6' />
                        Memorize with Active Learning Methods
                    </p>
                    <p className='text-[#6C7580] text-lg mx-4'>
                        <FontAwesomeIcon icon={faCircleCheck} className='text-[#4FACFE] w-6' />
                        Impove Speaking Skill with AI
                    </p>
                    <p className='text-[#6C7580] text-lg mx-4'>
                        <FontAwesomeIcon icon={faCircleCheck} className='text-[#4FACFE] w-6' />
                        Gamify learning with word games
                    </p>
                </div>
                <a href='#' className='ml-8 text-base h-12 
                    bg-gradient-to-r from-[#00F2FE] from-21%
                    to-[#4FACFE]
                    px-10 my-10
                    flex items-center rounded-full justify-center' >
                        <p className='text-white font-semibold text-lg' >
                            Let’s start explore the magic
                        </p>
                </a>
            </div>
        </div>
    )
}

export default MainPage