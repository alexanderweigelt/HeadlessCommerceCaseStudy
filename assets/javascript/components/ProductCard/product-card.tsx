import React, { ReactElement, FC } from 'react';
import { Product } from '../../entity/Product';
import { Button, Card } from "react-bootstrap";

export type ProductCardProps = {
    /**
     * single product data
     */
    data: Product
}

export const ProductCard: FC<ProductCardProps> = ({ data }): ReactElement => {
    return (
        <Card className={'shadow-sm'}>
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"/>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Placeholder</text>
            </svg>
            <Card.Header>
                <Card.Title>{data.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {data.description}
                </Card.Text>
                <mark className={'text-primary'}>$ {data.price}</mark>
            </Card.Body>
            <Card.Footer>
                <Button>Add to cart</Button>
            </Card.Footer>
        </Card>
    );
}
