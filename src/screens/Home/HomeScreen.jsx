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
            <Row title={"NETFLIX ORIGINAL"} url={request.netflixOriginals} isLarge/>
            <Row title={"TRENDING NOW"} url={request.trending}/>
            <Row title={"ROMANCE"} url={request.romanceMovies}/>
            <Row title={"HORROR"} url={request.horrorMovies}/>
            <Row title={"COMEDY"} url={request.comedyMovies}/>
            <Row title={"DOCUMENTARY"} url={request.documentaries}/>
        </div>
    )
}

export default HomeScreen
