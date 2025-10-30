import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // StrictMode: 자투리 오류까지 잡아내겠다.
  <StrictMode>
    <App />
  </StrictMode>,
)
