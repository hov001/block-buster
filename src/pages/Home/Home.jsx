import React from 'react'
// Components
import Header from '../../components/sections/Header/Header'
import MoviesList from '../../components/sections/MoviesList/MoviesList'
import TitleSection from '../../components/sections/TitleSection/TitleSection'

export default function Home() {
  return (
    <div>
      <Header />
      <TitleSection />
      <MoviesList />
    </div>
  )
}
