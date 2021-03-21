import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../../products';
import Rating from './Rating';
import Product from './Product';


const ProductScreen = ({match}) => {

    //access a single product from the products list using the high order array method
    //destructure by using match in curly braces instead of props.match
    //using match gives us access to params 
    const product = products.find(p => p._id === match.params.id)
   
    
    return (
        <>
        <Link className='btn btn-light my-3' to='/'>
            Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>
                            {product.name}
                        </h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating
                        value={product.rating}
                        text={`${product.numReviews} Reviews`}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>€ {product.price}</strong>

                                </Col>
                            </Row>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status</Col>
                                <Col>
                                    {product.countInStock > 0 ?'instock': 'out of stock'}

                                </Col>
                            </Row>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}> Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            
        </Row>
           
        </>
    )
       
            
        
    
}

export default ProductScreen
