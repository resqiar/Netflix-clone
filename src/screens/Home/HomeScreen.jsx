import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div className="home__screen">
            {/* HEADER */}
                <Header/>

            {/* HERO */}
                <Hero/>


            {/* A LOT OF ROW */}
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
        </div>
    )
}

export default HomeScreen
