import React from 'react'
// Components
import MoviesList from '../../components/sections/MoviesList/MoviesList'
import TitleSection from '../../components/sections/TitleSection/TitleSection'

export default function Home() {
  return (
    <div>
      <TitleSection text={'Movies'} />
      <MoviesList />
    </div>
  )
}
