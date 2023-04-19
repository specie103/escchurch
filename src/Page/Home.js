import React from 'react'
import MyCarousel from '../Components/Carousel'
import Welcome from '../Components/Welcome'
import Anthem from '../Components/Anthem'
import Programs from '../Components/Progranms'
import Footer from '../Components/Footer'
import UpcomingEvents from '../Components/Events'

const numberOfEvents = 1;
function Home() {
    return (
        <div>
            <MyCarousel/>
            <Welcome/>
            <Anthem/>
            <Programs limit={4} />
            <UpcomingEvents limit={numberOfEvents} />
            <Footer />
        </div>
    )
}

export default Home
