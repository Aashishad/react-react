import React from 'react'
import Header from './components/Header';
import DisplaySection from './homepage/DisplaySection';
import Techno from './homepage/Techno';
import Introduction from './homepage/Introduction';
import Footer from './homepage/Footer';

const App = () => {

  return (
    <div >
      <Header />
      <DisplaySection />
      <Techno />
      <Introduction />
      <Footer/>
    </div>
  )
}

export default App