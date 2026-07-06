import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvide, WorkProvide } from './CreateContext.jsx'
import { CompleteProvide } from './CreateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkProvide>
      <CompleteProvide>
        <ThemeProvide>
          <App />
        </ThemeProvide>
      </CompleteProvide>
    </WorkProvide>
  </StrictMode>,
)
