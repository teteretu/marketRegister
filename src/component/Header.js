import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        style={{
          elevation: 8,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          height:
            Constants.statusBarHeight > 20
              ? Dimensions.get("screen").height * 0.12
              : Dimensions.get("screen").height * 0.1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          paddingTop:
            Platform.OS === "ios" || Constants.statusBarHeight > 20 ? 25 : null,
        }}
        colors={[Colors.mainGreen, Colors.fGreen]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* left btn */}
        <View style={{ width: "17%", paddingLeft: 15 }}>
          {this.props.removeLeftBtn ? null : (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
        {/* Title */}
        <View style={{ width: "65%" }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 25 }}>
            {this.props.title}
          </Text>
        </View>
        {/* right btn */}
        <View style={{ width: "18%" }}>
          {this.props.exitBtn && (
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={this.props.exitBtn}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  paddingRight: 5,
                }}
              >
                Sair
              </Text>
              <Ionicons name="md-exit" size={30} color="white" />
            </TouchableOpacity>
          )}
          {this.props.closeBtn && (
            <TouchableOpacity onPress={this.props.closeBtn}>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 25,
                    paddingRight: 15,
                    textAlign: "right",
                  }}
                >
                  X
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    );
  }
}
