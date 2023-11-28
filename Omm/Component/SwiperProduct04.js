import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SwiperProductCss } from "../css/SwiperProductcss";
import { Grid, Col, Row } from "react-native-easy-grid";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native-gesture-handler";
import JangBtnPay from "./JangBtnPay";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function SwiperProduct04() {
  const { productInfo, setProductInfo } = useContext(ProductContext);

  const [products, setProducts] = useState([
    { name: "소스 1", price: 1000, count: 0 },
    { name: "소스 2", price: 2000, count: 0 },
    { name: "소스 3", price: 100, count: 0 },
    { name: "소스 4", price: 200, count: 0 },
    { name: "소스 5", price: 500, count: 0 },
    { name: "소스 6", price: 1500, count: 0 },
    { name: "소스 7", price: 200, count: 0 },
    { name: "소스 8", price: 500, count: 0 },
    { name: "소스 9", price: 1500, count: 0 },
  ]);

  const handleClick = (index) => {
    setProducts(
      products.map((product, i) =>
        i === index ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const prevProductsRef = useRef(products);

  useEffect(() => {
    const changedProducts = products.filter((product, i) => {
      const prevProduct = prevProductsRef.current[i];
      return prevProduct.count !== product.count;
    });

    if (changedProducts.length > 0) {
      setProductInfo((prevState) => {
        const newSauceState = [...prevState.sauce];
        changedProducts.forEach((changedProduct) => {
          const existingProductIndex = newSauceState.findIndex(
            (product) => product.name === changedProduct.name
          );

          if (existingProductIndex !== -1) {
            newSauceState[existingProductIndex] = changedProduct;
          } else {
            newSauceState.push(changedProduct);
          }
        });
        return {
          ...prevState,
          sauce: newSauceState,
        };
      });
    }

    if (changedProducts.length > 0) {
      console.log(changedProducts);
    }

    prevProductsRef.current = products;
  }, [products]);
  return (
    <>
      <ScrollView style={SwiperProductCss.ViewContainer}>
        <Grid style={SwiperProductCss.gridContainer}>
          {products.map((product, index) => {
            if (index % 2 === 0) {
              return (
                <Row key={index}>
                  <Col>
                    <TouchableOpacity
                      style={SwiperProductCss.gridItem}
                      onPress={() => handleClick(index)}
                    >
                      <Text style={SwiperProductCss.text}>{product.name}</Text>
                    </TouchableOpacity>
                  </Col>

                  {index + 1 < products.length ? (
                    <Col>
                      <TouchableOpacity
                        style={SwiperProductCss.gridItem}
                        onPress={() => handleClick(index + 1)}
                      >
                        <Text style={SwiperProductCss.text}>
                          {products[index + 1].name}
                        </Text>
                      </TouchableOpacity>
                    </Col>
                  ) : (
                    <Col />
                  )}
                </Row>
              );
            }
          })}
        </Grid>
      </ScrollView>
    </>
  );
}

export default SwiperProduct04;
