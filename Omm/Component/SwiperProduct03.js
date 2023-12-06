import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
import { IPContext } from "../contexts/IPContext";
import { Badge } from "react-native-elements";

function SwiperProduct03() {
  const { productInfo, setProductInfo } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const prevProductsRef = useRef([]);

  const { myIP } = useContext(IPContext);

  useEffect(() => {
    fetch(`http://${myIP}:4000/admin/Productdata`)
      .then((response) => response.json())
      .then((data) => {
        const riceProducts = data.filter(
          (product) => product.category === "밥/면"
        );
        setProducts(riceProducts);
        prevProductsRef.current = riceProducts;
      });
  }, []);

  const handleClick = (index) => {
    setProducts(
      products.map((product, i) =>
        i === index ? { ...product, count: (product.count || 0) + 1 } : product
      )
    );
  };

  useEffect(() => {
    const changedProducts = products.filter((product, i) => {
      const prevProduct = prevProductsRef.current[i];
      if (!prevProduct) {
        return false;
      }
      return prevProduct.count !== product.count;
    });

    if (changedProducts.length > 0) {
      setProductInfo((prevState) => {
        const newRiceState = [...prevState.rice];
        changedProducts.forEach((changedProduct) => {
          const existingProductIndex = newRiceState.findIndex(
            (product) => product.ProductName === changedProduct.ProductName
          );

          if (existingProductIndex !== -1) {
            newRiceState[existingProductIndex] = changedProduct;
          } else {
            newRiceState.push(changedProduct);
          }
        });
        return {
          ...prevState,
          rice: newRiceState,
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
                    <Badge value={products[index].count} status="primary" containerStyle={{ position: 'absolute', top: 10, left: 150 }} />
                    <TouchableOpacity
                      style={SwiperProductCss.gridItem}
                      onPress={() => handleClick(index)}
                    >
                      <Image src={`http://${myIP}:4000/${product.ImageUrl}`} alt="이미지" style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                      <Text style={SwiperProductCss.text}>{product.ProductName} / {product.Price}</Text>
                    </TouchableOpacity>
                  </Col>

                  {index + 1 < products.length ? (
                    <Col>
                      <Badge value={products[index + 1].count} status="primary" containerStyle={{ position: 'absolute', top: 10, left: 150 }} />
                      <TouchableOpacity
                        style={SwiperProductCss.gridItem}
                        onPress={() => handleClick(index + 1)}
                      >
                        <Image src={`http://${myIP}:4000/${products[index + 1].ImageUrl}`} alt="이미지" style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                        <Text style={SwiperProductCss.text}>
                          {products[index + 1].ProductName} / {products[index + 1].Price}
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

export default SwiperProduct03;
