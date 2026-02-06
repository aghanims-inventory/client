import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Test from './components/Test/Test.tsx'
import Heroes from './components/Heroes/Heroes.tsx'
import NotFound from './components/NotFound/NotFound.tsx'
import { ConfigProvider, theme } from 'antd'
import Home from './components/Home/Home.tsx'

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: '#0f0f0f',
          colorTextBase: '#e8e8e8',
          colorPrimary: '#1890ff',
          colorBgContainer: '#1a1a1a',
          colorBorder: '#2f2f2f',
        },
      }}
    >
      <BrowserRouter>
        <div className="app-container">
          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/heroes" element={<Heroes />} />
              <Route path="/test" element={<Test />} />

              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;