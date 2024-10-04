import React from 'react'
import Header from './Components/Header'
import Home from './Page/Home'
import Joblisting from './Page/Joblisting'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Page/Form';
import Footer from './Components/Footer';


function App() {
  return (
  <>
  
    <Header/>
    <Home/>
    <Joblisting/>
    <Form/>
  <Footer/>
  </>
  )
}

export default App