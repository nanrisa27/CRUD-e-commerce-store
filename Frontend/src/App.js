import React from 'react';
import { Container } from "react-bootstrap";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <> 
    <Header/>
    <main >
      <Container>  
         <h1> Welcome to AfroAsia shoping</h1>
      </Container>
      
    </main>
    <Footer/>
    </>
  );
}

export default App;
