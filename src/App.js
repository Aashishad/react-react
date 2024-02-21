import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import RootLayout from './components/RootLayout'
import SamplePage from './pages/SamplePage'


const App = () => {

  return (
    <>
      
      <Routes>
        <Route element={<RootLayout />}>

        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='contact' element={<Contact />} />
        <Route path='sample/:id' element={<SamplePage />} />
        </Route>
        

     </Routes>
    </>
  )
}

export default App