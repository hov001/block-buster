import React from 'react'
import firebase from 'firebase/app'
import firebaseConfig from './constants/firebase.config'

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <h1>app working!</h1>
    </div>
  )
}

export default App
