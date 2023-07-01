import React from 'react'
import Brand from "./components/brand/Brand"
import CTA from "./components/cta/CTA"
import Navbar from "./components/navbar/Navbar"
//above is the old way to import which is messy
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers" //new import style for cleaner code has to create a index.js file in the folder
import "./App.css"


const App = () => {
    return (
        <div className="App ">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App