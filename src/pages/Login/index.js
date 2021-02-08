import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default class Login extends Component {
  static navigationOptions = {
    header: () => {
      null;
    },
  };

  constructor(props) {
    super(props);
    this.emailRef = "";
    this.passwordRef = "";
    this.state = {
      email: "",
      password: "",
      message: "",
      flag: false,
      showPassword: false,
    };
  }

  setEmail(email) {
    this.setState({ email: email });
  }

  setPassword(password) {
    this.setState({ password: password });
  }

  handleSubmit = async () => {
    let { email, password } = this.state;
    if (email == null || (email == "" && password == null) || password == "") {
      Alert.alert(" ", "Informe e-mail e senha para continuar.");
    } else {
      this.setState({ flag: true });
      //   try {
      // const response = await api.post("/authentication?", {
      //   username: email.trim(),
      //   password: password.trim(),
      // });
      // const { statusCode } = response.data;
      // let data = response.data;

      // if (statusCode == 200) {
      Keyboard.dismiss();
      this.setState({ flag: false });
      this.props.navigation.navigate("Home");
      return;
      //   } catch (_err) {
      //     Alert.alert(
      //         "Sem sinal de Internet. Verifique sua conexão, e tente novamente."
      //     );
      //     this.setState({
      //       flag: false,
      //     });
      //   }
    }
  };

  onLoad = () => <Text>Loading...</Text>;

  render() {
    let { email, password, message } = this.state;

    return (
      <LinearGradient
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
        }}
        colors={[Colors.mainGreen, Colors.fGreen]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SafeAreaView>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: "50%",
                  width: "90%",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  marginHorizontal: "5%",
                  borderRadius: 5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,
                  elevation: 8,
                }}
              >
                <View
                  style={{
                    marginTop: "20%",
                    backgroundColor: "#fff",
                    width: "80%",
                    height: 60,
                  }}
                >
                  <TextInput
                    ref={(ref) => (this.emailRef = ref)}
                    style={{
                      fontSize: 16,
                      paddingBottom: "1.4%",
                      color: "#aaaaaa",
                      height: 40,
                      borderBottomColor: "rgba(0, 0, 0, 0.26)",
                      borderBottomWidth: 1,
                      textAlignVertical: "bottom",
                    }}
                    placeholder="Email"
                    autoFocus
                    placeholderTextColor={"#aaaaaa"}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onSubmitEditing={() => {
                      this.passwordRef.focus();
                    }}
                    returnKeyType="next"
                    defaultValue={email ? email.email : null}
                    value={email}
                    onChangeText={(value) => this.setEmail(value)}
                  />
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      marginTop: "5%",
                    }}
                  >
                    <TextInput
                      ref={(ref) => (this.passwordRef = ref)}
                      style={{
                        width: "100%",
                        fontSize: 16,
                        paddingBottom: "1.4%",
                        color: "#aaaaaa",
                        backgroundColor: "#fff",
                        height: 40,
                        marginTop: "2%",
                        borderBottomColor: "rgba(0, 0, 0, 0.26)",
                        borderBottomWidth: 1,
                        textAlignVertical: "bottom",
                      }}
                      placeholder="Senha"
                      secureTextEntry={this.state.showPassword ? false : true}
                      placeholderTextColor={"#aaaaaa"}
                      autoCapitalize="none"
                      returnKeyType="done"
                      onSubmitEditing={this.handleSubmit}
                      value={password}
                      onChangeText={(value) => this.setPassword(value)}
                    />
                    <TouchableOpacity
                      style={{
                        alignSelf: "flex-end",
                        position: "absolute",
                        right: 0,
                        marginBottom: "1.6%",
                      }}
                      onPress={() =>
                        this.setState({
                          showPassword: !this.state.showPassword,
                        })
                      }
                    >
                      <Ionicons
                        size={18}
                        color={"#555"}
                        name={
                          !this.state.showPassword ? "md-eye" : "md-eye-off"
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text
                  style={{
                    color: "red",
                    fontSize: 12,
                    textAlign: "left",
                    width: "60%",
                  }}
                >
                  {message}
                </Text>

                {/* button entrar */}
                <View
                  style={{
                    backgroundColor: "#fff",
                    marginTop: "20%",
                    width: "100%",
                    height: "14%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.flag ? (
                    this.onLoad()
                  ) : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.mainBlue,
                        width: "80%",
                        height: "88%",
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={async () => await this.handleSubmit()}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        ENTRAR
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 30,
    flexDirection: "row",
    borderBottomWidth: 3,
    borderBottomColor: Colors.tintColor,
    alignItems: "baseline",
  },
  inputIcon: {
    paddingRight: 10,
    bottom: 0,
  },
  input: {
    fontSize: 20,
    flex: 1,
    color: "#fff",
    fontWeight: "700",
    bottom: 0,
  },
});
