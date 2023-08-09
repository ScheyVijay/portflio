import React from "react";
import Shreya from './images/shreya.jpeg'

const Home = () => {
    return (
        <section className="home-dev">
            <div className="hero">
                <div className="hero-name">
                    Shreya Vijay
                    <div className="hero-tags">
                        Coder / Artist / Poet / Writer / Singer
                    </div>
                </div>

                <div className="hero-img">
                    <img src={Shreya} className="hero-img"/>
                </div>
            </div>
        </section>
    )
}


export default Home;
