import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { mpstyles } from "../../css/MyProfileCss";
import JangBtn from "../../Component/JangBtn";

function NAMEEditScreen() {
  const [textAValue, setTextAValue] = useState("");
  return (
    <View style={mpstyles.edit_container}>
      <TextInput
        editable
        onChangeText={(text) => setTextAValue(text)}
        value={textAValue}
        style={{
          borderColor: "black",
          borderWidth: 1.5,
          width: "95%",
          padding: 5,
          marginTop: 15,
          marginBottom: 10,
          borderRadius: 10,
        }}
        placeholder="이름 변경"
      />
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

export default NAMEEditScreen;
