import React from 'react'
import './styles/HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/*NavBar*/}
      <Nav />
      {/*Banner*/}
      <Banner />
            

    </div>
  )
}

export default HomeScreen