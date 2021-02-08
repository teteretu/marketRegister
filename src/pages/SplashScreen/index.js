import React, { Component } from "react";
import { View, Image } from "react-native";

import splash from '../../../assets/splash.gif';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 2500);
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, alignItems: "center", justifyContent: "center" }}>
		<Image
          source={splash}
          style={{ width: 150, height: 150 }} />
      </View>
    );
  }
}
