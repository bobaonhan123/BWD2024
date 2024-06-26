function Footer() {
    return (
        <footer className='w-full mx-0 my-0
        h-64 mt-10 flex flex-col justify-center
        max-lg:h-96'>
            <hr className="border-t-1 border-[#6c7580a8] mx-96
            max-lg:mx-10" />
            <div className='flex
            max-lg:flex-col
            max-lg:h-3/4
            max-lg:mx-2
            max-lg:items-start
            max-lg:justify-between
            max-lg:mt-10
            max-lg:mb-4
            h-44
            items-center
            justify-between
            px-10
            mx-80
            
            '>
                <div className="flex flex-col items-start">
                    <p className='font-semibold text-lg'>About</p>
                    <p className='text-sm text-[#6C7580]'>Pricing</p>
                    <p className='text-sm text-[#6C7580]'>Contact</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className='font-semibold text-lg'>Product</p>
                    <p className='text-sm text-[#6C7580]'>Update</p>
                    <p className='text-sm text-[#6C7580]'>Blog</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className='font-semibold text-lg'>Social</p>
                    <p className='text-sm text-[#6C7580]'>Facebook</p>
                    <p className='text-sm text-[#6C7580]'>Instagram</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className='font-semibold text-lg'>Help & Info</p>
                    <p className='text-sm text-[#6C7580]'>Terms And Conditions</p>
                    <p className='text-sm text-[#6C7580]'>Privacy Policy</p>
                </div>
            </div>
            <div>
                <p className='text-sm mb-2 text-[#4B5563]'>Made by Khỉ Con</p>
                <p className='text-sm text-[#6C7580]'>© TakeItEasy 2024. All Rights Reserved.</p>
            </div>        
        </footer>
    );
}

export default Footer;