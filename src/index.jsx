import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Preloader from './components/Preloader/Preloader'

const App = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Preloader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
