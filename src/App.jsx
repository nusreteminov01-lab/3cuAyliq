
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Hero from './components/hero'
import Details from './components/details'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
