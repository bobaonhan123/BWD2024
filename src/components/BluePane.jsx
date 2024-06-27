import womanwithtablet from "../assets/images/material/woman_with_tablet.png";

export default function BluePane({ onClick, option }) {
    return (
        <div
            className={`absolute top-0 w-1/2 h-full bg-[#33c5fe] 
                bg-gradient-to-tr from-[#4FACFE] from-21% to-[#00F2FE]
                z-10 transition-transform duration-500 ease-in-out ${
                    option ? 'transform translate-x-full' : 'transform translate-x-0'
                }
                flex justify-center items-center    
            `}
            onClick={onClick}
        >
            <div
                className="
                rounded-2xl w-[60%] h-[70%] bg-[#ffffff56]
                border-white border-2 border-opacity-20
                relative
            "
            >
                <p
                    className={`
                    duration-500
                    font-semibold text-xl text-white 
                    w-36 text-start ml-6 mt-6
                    ${option ? 'transform translate-x-0' : 'transform translate-x-[90%]'}
                `}
                >
                    Boost your vocabulary
                    and language skills with us.
                </p>
                <img
                    src={womanwithtablet}
                    alt="womanwithtablet"
                    className={`
                    bottom-0 absolute transition-transform duration-50 ease-in-out
                    h-[95%] w-auto object-cover object-right
                    ${option ? 'right-[-16.5%]' : 'left-[-16.5%] transform -scale-x-100'}
                `}
                />
            </div>
        </div>
    );
}
