import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Row from "../../components/Row/Row";
import "./HomeScreen.css";
import request from "../../api/Requests";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayState, unplay } from "../../features/userSlice";
import ModalVideo from "react-modal-video";

const HomeScreen = () => {
    const [play, setPlay] = useState(false);
    const playState = useSelector(selectPlayState); // play || unplay
    const dispatch = useDispatch();

    return (
        <div className="home__screen">
            {/* HEADER */}
            <Header />

            {/* HERO */}
            <Hero />

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={(playState ? () => {
                    setPlay(true)
                } : play)}
                videoId={playState?.url}
                onClose={() => {
                    dispatch(unplay())
                    setPlay(false)
                }}
            ></ModalVideo>

            {/* A LOT OF ROW */}
            <Row title={"Netflix Original"} url={request.netflixOriginals} isTV/>
            <Row title={"Upcoming"} url={request.upcoming} isLarge />
            <Row title={"Trending Now"} url={request.trending} />
            <Row title={"Top Rated"} url={request.topRated} isLarge />
            <Row title={"Romance"} url={request.romanceMovies} />
            <Row title={"Horror"} url={request.horrorMovies} />
            <Row title={"Comedy"} url={request.comedyMovies} />
            <Row title={"Documentary"} url={request.documentaries} />
        </div>
    );
};

export default HomeScreen;
