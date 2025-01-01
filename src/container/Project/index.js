import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroImgSect from '../../components/Hero/heroimgsect';

const Project = () => {

    return(
        <>
       <Navbar/>
       <HeroImgSect heading="Projects" text="Some of most recent works"/>
        <Footer/>
        </>
    )


}

export default Project