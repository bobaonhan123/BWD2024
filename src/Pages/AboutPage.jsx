import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutPage() {


    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold underline py-96">
                Hello
            </h1>
            <Footer />
        </div>
    )
}

export default AboutPage;
