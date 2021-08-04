import React from 'react'
import './App.css'
// Firebase config
import firebase from 'firebase/app'
import firebaseConfig from './constants/firebase.config'
// Components
import Home from './pages/Home/Home'
import Header from './components/sections/Header/Header'
import SinglePage from './pages/SinglePage/SinglePage'

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <Header />
      {/*<Home />*/}
      <SinglePage />
    </div>
  )
}

export default App
