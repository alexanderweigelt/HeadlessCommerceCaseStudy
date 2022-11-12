import React, { ReactElement, ReactNode, useState } from "react";
import { ProductContext } from "./product-context"
import { Product } from "../../entity/Product";

export const ProductProvider = (props: {
    children: ReactNode;
}): ReactElement => {
    const state = useState<Product[]>([]);

    return <ProductContext.Provider value={state} {...props} />;
};
