import React from 'react'
import HeroSection from './Header'
import Blog from './Blog'
import NavBar from './NavBar'
function Home() {
  return (
    <div>
      <NavBar/>
        <HeroSection/>
        <Blog/>

    </div>
  )
}

export default Home