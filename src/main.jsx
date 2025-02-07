import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Animation from './Components/Animation.jsx'
import UseSpring from './Components/Fun/UseSpring.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> 
    <Animation />*/}
    <UseSpring />
  </StrictMode>,
)
