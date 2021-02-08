import React, { Component } from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.mainBlue,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ width: 150, height: 150, color: "#fff", fontSize: 40 }}>
          Home
        </Text>
        <AntDesign name="infocirlceo" size={24} color="black" />
      </View>
    );
  }
}
