import React, {useState, useEffect} from 'react';
import Menu from './Components/Navigation';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Connect from './Page/Connect';
import Events from './Page/Events';
import Contact from './Page/Contact';


function Appt() {
    const [loading, setLoading] = useState(true);

    useEffect(() => { // Simulate a delay to demonstrate the preloader
        setTimeout(() => setLoading(false), 1300);
    }, []);

    return (
        <div className="App">
            {
            loading ? (
                <div className="preloader">
                    <div className="preloader-text">Loading...</div>
                </div>
            ) : (
                <>
                    <BrowserRouter>
                        <Menu/>
                        <Routes>
                            <Route path="/"
                                element={<Home/>}/>
                            <Route path="/About"
                                element={<About/>}/>
                            <Route path="/Connect"
                                element={<Connect/>}/>
                            <Route path="/Events"
                                element={<Events/>}/>
                            <Route path="/Contact"
                                element={<Contact/>}/> {/* <Route path="*" element={<Error />} /> */} </Routes>
                    </BrowserRouter>
                </>
            )
        } </div>
    );
}

export default Appt;
