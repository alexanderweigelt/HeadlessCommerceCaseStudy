import { createContext, Dispatch, SetStateAction } from "react"
import { Product } from "../../entity/Product";

type ContextValue = [Product[], Dispatch<SetStateAction<Product[]>>];

export const ProductContext = createContext<ContextValue>([[], (e) => e]);
