import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.css'
import App from './components/App/App.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Test from './components/Test/Test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
