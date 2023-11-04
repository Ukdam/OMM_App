import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class JangBtn extends Component {
  static defaultProps = {
    title: "untitled",
    onPress: () => null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={[styles.button1]} onPress={this.props.onPress}>
        <Text style={[styles.title]}>{this.props.title}</Text>
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
  title: {
    fontSize: 14,
    color: "black",
  },
});
