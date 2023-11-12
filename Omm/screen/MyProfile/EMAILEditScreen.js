import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { mpstyles } from "../../css/MyProfileCss";
import JangBtn from "../../Component/JangBtn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DropDownPicker from "react-native-dropdown-picker";

function EMAILEditScreen() {
  const [textValue, setTextValue] = useState("");
  const [textValue2, setTextValue2] = useState("");

  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [selectItems, setSelectItems] = useState([
    { label: "주소 선택", value: null },
    { label: "naver.com", value: "naver.com" },
    { label: "gmail.com", value: "gmail.com" },
    { label: "daum.net", value: "daum.net" },
    { label: "yahoo.com", value: "yahoo.com" },
    { label: "직접 입력", value: "직접 입력" },
  ]);
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
        <TextInput
          editable
          onChangeText={(text) => setTextValue(text)}
          value={textValue}
          style={{
            borderColor: "black",
            borderWidth: 1.5,
            width: "40%",
            height: 50,
            padding: 5,
            marginTop: 15,
            marginBottom: 10,
            borderRadius: 10,
          }}
          placeholder="이메일 변경"
        />

        {/* <Text>@</Text> */}
        <FontAwesomeIcon
          icon={["fas", "at"]}
          size={20}
          style={{ color: "black" }}
        />
        <View style={{ width: "40%" }}>
          <DropDownPicker
            open={selectOpen}
            value={selectValue}
            items={selectItems}
            setOpen={setSelectOpen}
            setValue={setSelectValue}
            setItems={setSelectItems}
            placeholder="주소 선택"
            dropDownContainerStyle={{
              borderColor: "black",
              borderWidth: 1.5,
            }}
            style={{
              borderColor: "black",
              borderWidth: 1.5,
            }}
          />
        </View>
      </View>

      <View
        style={{
          alignItems: "flex-end",
          width: "95%",
          marginTop: selectOpen ? 33 * selectItems.length : 0,
        }}
      >
        {selectValue === "직접 입력" ? (
          <TextInput
            editable
            onChangeText={(text) => setTextValue2(text)}
            value={textValue2}
            style={{
              borderColor: "black",
              borderWidth: 1.5,
              width: "42%",
              height: 50,
              padding: 5,
              marginBottom: 10,
              marginRight: 5,
              borderRadius: 10,
            }}
            placeholder="직접 입력"
          />
        ) : null}

        <JangBtn title={"변경"} ver={"3"} />
      </View>
    </View>
  );
}

export default EMAILEditScreen;
