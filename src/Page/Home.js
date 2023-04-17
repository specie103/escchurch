import React from 'react'
import MyCarousel from '../Components/Carousel'
import Welcome from '../Components/Welcome'
import Anthem from '../Components/Anthem'
import Programs from '../Components/Progranms'
import Footer from '../Components/Footer'

function Home() {
    return (
        <div>
            <MyCarousel/>
            <Welcome/>
            <Anthem/>
            <Programs limit={15} />
            <Footer />
        </div>
    )
}

export default Home
