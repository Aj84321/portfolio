import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroImgSect from '../../components/Hero/heroimgsect';
import PricingCard from '../PricingCard/PricingCard';
import Work from '../../components/Work';



const Project = () => {

    return(
        <>
       <Navbar/>
       <HeroImgSect heading="Projects" text="Some of most recent works"/>
       <Work/>
       <PricingCard/>
        <Footer/>
        </>
    )


}

export default Project