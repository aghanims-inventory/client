import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.css'
import App from './components/App/App.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Test from './components/Test/Test.tsx'
import Heroes from './components/Heroes/Heroes.tsx'
import NotFound from './components/NotFound/NotFound.tsx'
import Footer from './components/Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/test" element={<Test />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
