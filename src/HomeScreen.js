import React from 'react'
import './styles/HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Requests'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/*NavBar*/}
      <Nav />
      {/*Banner*/}
      <Banner />
      {/*Row*/}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrading} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComidyMovies} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} isLargeRow />


    </div>
  )
}

export default HomeScreen