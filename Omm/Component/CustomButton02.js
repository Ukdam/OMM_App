import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class CustomButton02 extends Component {
  static defaultProps = {
    title: "untitled",
    buttonColor: "#000",
    titleColor: "#fff",
    onPress: () => null,
  };

  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: this.props.buttonColor,
          },
        ]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.title, { color: this.props.titleColor }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 15,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
  },
});
