import React, { FC } from 'react';
import { Product } from '../../entity/Product';
import { ProductCard } from "../ProductCard";
import { Row, Col } from "react-bootstrap";

export type ProductListProps = {
    /**
     * a list of products
     */
    list: Product[];
} & React.HTMLAttributes<HTMLDivElement>;

export const ProductList: FC<ProductListProps> = ({ list }) => {
    return (
        <>
            {list.length > 0 ? (
                <Row>
                    {list.map((product, index) => (
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
