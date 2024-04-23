import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className="intro">
                <img src={Me} alt="me" className="home__img" />
                <h1 className="home__name">Monserrat DAG</h1>
                <span className="home__education">I'm a Front-End developer</span>
                <HeaderSocials />
            </div>
        </section>
    )
}

export default Home