import React, { ReactElement, useContext } from 'react';
import { ProductCard } from "../ProductCard";
import { Row, Col } from "react-bootstrap";
import { ProductContext } from "../../context/Product";

export const ProductList = (): ReactElement => {
    const [products] = useContext(ProductContext);

    return (
        <>
            {products.length > 0 ? (
                <Row>
                    {products.map((product, index) => (
                        <Col xs={12} md={3} key={index}>
                            <ProductCard key={index} data={product}/>
                        </Col>
                    ))}
                </Row>
            ) : (
                'No products to display'
            )}
        </>
    );
}
