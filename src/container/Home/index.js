import React from 'react'
import Navbar from '../../components/Navbar'
import HeroImg from '../../components/Hero/heroimg'
import Footer from '../../components/Footer'
import WorkCard from '../WorkCard/WorkCard'

const Home = () => {
    
  return (
    <>
        <Navbar/>
        <HeroImg/>
        <WorkCard/>
        <Footer/>
    </>

  )
}

export default Home