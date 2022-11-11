import React, { useContext } from 'react';
import { useParams } from "react-router-dom"
import { ProductProvider, ProductContext } from '../../context/Product';
import { ProductList } from '../../components/ProductList';

export const Category = () => {
    return (
        <ProductProvider context={ProductContext}>
            <CategoryComposition/>
        </ProductProvider>
    );
}

const CategoryComposition = () => {
    const context = useContext(ProductContext);
    let { id } = useParams<"id">();

    return (
        <>
            <CategoryFilter/>
            <ProductList list={context.productData}/>
        </>
    );
}

const CategoryFilter = () => {
    const context = useContext(ProductContext);

    return (
        <></>
    )
}
