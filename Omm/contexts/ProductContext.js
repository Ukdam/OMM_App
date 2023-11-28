import { createContext, useState } from "react";

export const ProductContext = createContext({});

export function ProductContextProvider({ children }) {
  const initialProducts = {
    vegetable: [],
    meat: [],
    rice: [],
    sauce: [],
    etc: [],
  };
  const [productInfo, setProductInfo] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
}
