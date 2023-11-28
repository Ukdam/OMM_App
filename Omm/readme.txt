npx expo start --offline
expo start
npx expo start


<View style={pstyles.cart_menubox}>
  <Text>메뉴</Text>
  {Object.entries(productInfo).map(([category, products]) => {
    const totalPrice = products.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
    return (
      <View key={category}>
        {products.map((product, index) => (
          <View key={index} style={{ flexDirection: "row" }}>
            <Text>{`${product.name}`}</Text>
            <Text>{`x ${product.count} 가격 ${product.price * product.count}`}</Text>
          </View>
        ))}
        <Text>{`Category Total: ${totalPrice}`}</Text>
      </View>
    );
  })}
  {Object.values(productInfo).reduce((total, products) => {
    return total + products.reduce((total, product) => total + product.price * product.count, 0);
  }, 0)}
</View>