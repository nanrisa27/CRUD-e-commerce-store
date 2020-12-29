import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../../products'
import Product from '../Products/Product'

const LandingPage = () => {
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col key ={product._id} sm={12} md={6} lg={3} xl={3}>
                    <Product product={product}/>
                 
                </Col>

            )


            )}
        </Row>
            
        </>
    )
}

export default LandingPage
