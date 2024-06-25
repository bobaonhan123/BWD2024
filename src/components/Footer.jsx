function Footer() {
    return (
        <footer className='w-full mx-0 my-0
    h-64 mt-10'>
            <hr className="border-t-1 border-[#6c7580a8] mx-64" />
            <div className='flex
    items-center
    justify-between
    h-52
    px-10
    mx-52
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
            <p className='text-sm mb-2 text-[#4B5563]'>Made by Khỉ Con</p>
            <p className='text-sm text-[#6C7580] pb-8'>© TakeItEasy 2024. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;