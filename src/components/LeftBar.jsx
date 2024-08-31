import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { HeaderHidePage } from "../configurations/ComponentConfigurations";

function LeftBar() {



    return (
        <div className={`fixed
        max-w-96 w-1/5 
        h-screen
        top-0
        flex
        flex-col
        items-center
        left-[1%]
        `} >
            <div className='flex items-center' >
                    <Link to='/'>
                        <h1 className='ml-2 text-4xl font-semibold
                    bg-gradient-to-b from-[#4FACFE] from-21%
                    to-[#00F2FE] bg-clip-text text-transparent
                    my-6
                    ' >
                            take it easy
                        </h1>
                    </Link>
                </div>
            <div className="w-4/6
            bg-white
            rounded-3xl
            py-6
            h-56
            flex flex-col
            justify-evenly
            text-[#6C7580]
            shadow-2xl">
                <Link to='/'>
                    <p>Dashborad</p>
                </Link>
                <Link to='/'>
                    <p>Flashcards</p>
                </Link>
                <Link to='/'>
                    <p>Collections</p>
                </Link>
                <Link to='/'>
                    <p>Talk with AI</p>
                </Link>
            </div>
            <button
            className="w-1/2
            py-2
            text-white
            mt-4
            rounded-lg
            bg-gradient-to-b from-[#4FACFE] from-21%
            to-[#00F2FE]">
                Upgrade plan
            </button>
        </div >
    );
}

export default LeftBar;