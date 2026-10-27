import React from 'react'
import NavBar from './components/NavBar';
import HeroSection from './section/HeroSection';
import About  from './section/About';
import Stats from './section/Stats';

const App = ()=>{
  return(
    <>
      <NavBar />
      <HeroSection/>
      <About />
      <Stats/>
    </>
  )
}
export default App;