import React from 'react';
import { Container } from "react-bootstrap";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';


function App() {
  return (
    <> 
    <Header/>
    <main className='py-3'>
      <Container>  
         <LandingPage/>
      </Container>
      
    </main>
    <Footer/>
    </>
  );
}

export default App;
