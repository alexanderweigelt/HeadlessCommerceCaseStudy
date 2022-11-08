import React, { FC } from 'react';
import { Product } from '../../entity/Product';

export type ProductCardProps = {
    /**
     * single product data
     */
    data: Product
}

export const ProductCard:FC<ProductCardProps> = ({ data }) => {
  return (
      <></>
  );
}
