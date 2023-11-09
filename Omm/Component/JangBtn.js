import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class JangBtn extends Component {
  static defaultProps = {
    title: "untitled",
    onPress: () => null,
    ver: "untitled",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { title, onPress, ver } = this.props;
    return (
      <TouchableOpacity
        style={
          ver === "1"
            ? styles.button1
            : ver === "2"
            ? styles.button2
            : styles.button3
        }
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderRadius: 12,
    width: 70,
    height: 30,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderRadius: 12,
    width: 110,
    height: 30,
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    width: 50,
    height: 30,
  },
  title: {
    fontSize: 14,
    color: "black",
  },
});
