import React from "react";
import { View, Button, Text, StatusBar } from "react-native";
import { styles } from "../css/css";

function HoemScreen({ navigation }) {
  return (
    <View style={styles.container2}>
      <Text>Open up App</Text>
      <StatusBar style="auto" />
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate("Detail")}
      // onPress={() => navigation.push("Detail")}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

export default HoemScreen;
