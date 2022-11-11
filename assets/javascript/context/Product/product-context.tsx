import { createContext } from 'react'
import { Product } from "../../entity/Product";

type FilterProductPriceRangeType = {
    min: number,
    max: number
}

export type FilterProductType = {
    category?: number,
    priceRange?: FilterProductPriceRangeType
}

export type ProductContextType = {
    /**
     * The products
     */
    productData: Product[] | []
    /**
     * Filters the products by given params
     * @param filter
     */
    filterProducts: (filter: FilterProductType) => void
}

export const defaultProductContext: ProductContextType = {
    productData: [],
    filterProducts: () => {}
}

export const ProductContext = createContext<ProductContextType>(defaultProductContext)
