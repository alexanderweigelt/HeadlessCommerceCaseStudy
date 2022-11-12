import React, { ReactElement, useContext, useEffect } from 'react';
import { useLoaderData } from "react-router-dom"
import type { LoaderFunctionArgs } from "react-router-dom";
import { Category as CategoryEntity } from "../../entity/Category";
import { ProductContext } from '../../context/Product';
import { ProductList } from '../../components/ProductList';
import { ProductFilter } from "../../components/ProductFilter";
import { Heading } from "../../components/Headings";
import { CategoryApi } from "../../api/Category";
import { Card } from "react-bootstrap";

export function categoryLoader({ params }: LoaderFunctionArgs) {
    if (params.slug === "unauthorized") {
        throw new Response("Not Found", { status: 404 });
    }
    const categoryApi = new CategoryApi();
    const slug: string = params.slug as string;
    return categoryApi.getCategoryItem({ slug })
}

export const Category = (): ReactElement => {
    let category = useLoaderData() as CategoryEntity;
    const [, setProducts] = useContext(ProductContext);
    setProducts(category.productsData);

    return (
        <>
            <Card className={'mb-4'}>
                <Heading element={'h1'} className={'card-header'}>
                    {category.title}
                </Heading>
                <Card.Body>
                    <Card.Text>{category.description}</Card.Text>
                </Card.Body>
            </Card>
            <ProductFilter/>
            <ProductList/>
        </>
    );
}
