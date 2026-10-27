import React from 'react'
import NavBar from './components/NavBar';
import HeroSection from './section/HeroSection';
import About  from './section/About';
import Stats from './section/Stats';
import Dishes from './section/Dishes';
import Featured from './section/Featured';
import BookingProcess from './section/BookingProcess';
import Timing from './section/Timing';
import TestimonialSection from './section/TestimonialSection';

const App = ()=>{
  return(
    <>
      <NavBar />
      <HeroSection/>
      <About />
      <Stats/>
      <Dishes/>
      <Featured/>
      <BookingProcess/>
      <Timing/>
      <TestimonialSection/>
    </>
  )
}
export default App;