import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { mpstyles } from "../../css/MyProfileCss";
import JangBtn from "../../Component/JangBtn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function PHONEEditScreen() {
  const [textAValue, setTextAValue] = useState("");
  return (
    <View style={mpstyles.edit_container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ fontSize: 18 }}>010</Text>

        {/* - */}
        <FontAwesomeIcon
          icon={["fas", "minus"]}
          size={15}
          style={{ color: "black" }}
        />

        <TextInput
          editable
          onChangeText={(text) => setTextAValue(text)}
          value={textAValue}
          style={{
            borderColor: "black",
            borderWidth: 1.5,
            width: "30%",
            padding: 5,
            marginTop: 15,
            marginBottom: 10,
            borderRadius: 10,
          }}
          placeholder="1234"
        />

        {/* - */}
        <FontAwesomeIcon
          icon={["fas", "minus"]}
          size={15}
          style={{ color: "black" }}
        />

        <TextInput
          editable
          onChangeText={(text) => setTextAValue(text)}
          value={textAValue}
          style={{
            borderColor: "black",
            borderWidth: 1.5,
            width: "30%",
            padding: 5,
            marginTop: 15,
            marginBottom: 10,
            borderRadius: 10,
          }}
          placeholder="5678"
        />
      </View>

      <View
        style={{
          alignItems: "flex-end",
          width: "95%",
        }}
      >
        <JangBtn title={"변경"} ver={"3"} />
      </View>
    </View>
  );
}

export default PHONEEditScreen;
