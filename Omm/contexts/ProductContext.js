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
  const [selectedTab, setSelectedTab] = useState("채소"); // 추가된 상태

  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo, selectedTab, setSelectedTab }}>
      {children}
    </ProductContext.Provider>
  );
}
