import React from 'react'
import './App.css'
// Firebase config
import firebase from 'firebase/app'
import firebaseConfig from './constants/firebase.config'
// Components
import Home from './pages/Home/Home'

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
