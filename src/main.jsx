import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import Keybord from './keybord.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Keybord/>
  </StrictMode>,
)
