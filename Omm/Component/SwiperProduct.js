import React, { useState, useEffect, useRef, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import { ProductContext } from "../contexts/ProductContext";
import { SwiperProductCss } from "../css/SwiperProductcss";
import { IPContext } from "../contexts/IPContext";

function SwiperProduct() {
  const { productInfo, setProductInfo } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const prevProductsRef = useRef([]);

  const { myIP } = useContext(IPContext);

  useEffect(() => {
    fetch(`http://${myIP}:4000/admin/Productdata`)
      .then((response) => response.json())
      .then((data) => {
        const vegetableProducts = data.filter(
          (product) => product.category === "채소"
        );
        setProducts(vegetableProducts);
        prevProductsRef.current = vegetableProducts;
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
        const newVegetableState = [...prevState.vegetable];
        changedProducts.forEach((changedProduct) => {
          const existingProductIndex = newVegetableState.findIndex(
            (product) => product.ProductName === changedProduct.ProductName
          );

          if (existingProductIndex !== -1) {
            newVegetableState[existingProductIndex] = changedProduct;
          } else {
            newVegetableState.push(changedProduct);
          }
        });
        return {
          ...prevState,
          vegetable: newVegetableState,
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
                      <Text style={SwiperProductCss.text}>
                        {product.ProductName}
                      </Text>
                    </TouchableOpacity>
                  </Col>

                  {index + 1 < products.length ? (
                    <Col>
                      <TouchableOpacity
                        style={SwiperProductCss.gridItem}
                        onPress={() => handleClick(index + 1)}
                      >
                        <Text style={SwiperProductCss.text}>
                          {products[index + 1].ProductName}
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

export default SwiperProduct;
