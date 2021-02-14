import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Row from '../../components/Row/Row'
import './HomeScreen.css'
import request from '../../api/Requests'

const HomeScreen = () => {
    return (
        <div className="home__screen">
            {/* HEADER */}
                <Header/>

            {/* HERO */}
                <Hero/>


            {/* A LOT OF ROW */}
            <Row title={"NETFLIX Original"} url={request.netflixOriginals}/>
            <Row title={"Upcoming"} url={request.upcoming} isLarge/>
            <Row title={"Trending Now"} url={request.trending}/>
            <Row title={"Top Rated"} url={request.topRated} isLarge/>
            <Row title={"Romance"} url={request.romanceMovies}/>
            <Row title={"Horror"} url={request.horrorMovies}/>
            <Row title={"Comedy"} url={request.comedyMovies}/>
            <Row title={"Documentary"} url={request.documentaries}/>
        </div>
    )
}

export default HomeScreen
