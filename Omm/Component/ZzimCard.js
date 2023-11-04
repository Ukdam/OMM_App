import React from "react";
import { Text, StyleSheet, View } from "react-native";

const zzstyles = StyleSheet.create({
  container: {
    width: 300,
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    borderRadius: 15,
  },
});

const ZzimCard = () => {
  return (
    <View style={zzstyles.container}>
      <Text>찜</Text>
    </View>
  );
};

export default ZzimCard;
