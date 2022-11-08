import React, { FC } from 'react';
import { Product } from '../../entity/Product';

export type ProductListProps = {
  /**
   * a list of products
   */
  list: Product[];
} & React.HTMLAttributes<HTMLDivElement>;

export const ProductList:FC<ProductListProps> = ({ list }) => {
  return (
    <>
    </>
  );
}
