import React, { Context, HTMLAttributes, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { ProductContextType, FilterProductType } from "./product-context"
import { ProductApi } from "../../api/Product"

export type ProductProviderProps = {
    context: Context<ProductContextType>
} & HTMLAttributes<HTMLDivElement>

export function ProductProvider({ context, children }: ProductProviderProps) {
    const data = useContext(context);
    const productApi = new ProductApi();
    const [product, setProduct] = useState(data.productData);
    let { id } = useParams<"id">();

    useEffect(() => {
        productApi.getProductCollection().then(data => {
            setProduct(data)
        });
    }, [])

    // ToDo: add product filter in a further step
    const filterProducts = (filter: FilterProductType): void => {
        console.log(filter)
    };

    return (<context.Provider value={{ productData: product, filterProducts }}>{children}</context.Provider>)
}
