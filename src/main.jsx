import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // use Vite's BASE_URL at runtime as BrowserRouter basename.
  // This makes the app work when served from a subpath (e.g. GitHub Pages /<repo>/)
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
)
