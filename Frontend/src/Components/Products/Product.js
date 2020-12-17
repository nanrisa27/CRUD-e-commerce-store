import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//distructuring by using curely 
//braces in the function to access the product directly
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product.id}`}>
                <Card.Img src={product.image} variant='top'/>

            </Link>
            

        </Card>
    )
}

export default Product
