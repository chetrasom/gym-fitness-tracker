import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ExercisesProvider } from './context/exercises_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExercisesProvider>
      <App />
    </ExercisesProvider>
  </React.StrictMode>,
)
