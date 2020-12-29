import React from 'react';
import { Container } from "react-bootstrap";
import { Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import ProductScreen from './Components/Products/ProductScreen';


function App() {
  return (
    <> 
    <Header/>
    <main className='py-3'>
      <Container>  
         <Route path='/' exact component={LandingPage}/>
         <Route path='/product/:_id'  component={ProductScreen}/>
      </Container>
      
    </main>
    <Footer/>
    </>
  );
}

export default App;
