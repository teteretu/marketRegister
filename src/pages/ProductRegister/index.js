import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Header from "../../component/Header";
import Colors from "../../constants/Colors";

export default class ProductRegister extends Component {
  constructor(props) {
    super(props);
    this.productNameRef = "";
    this.state = {
      productName: "",
    };
  }

  _emptyList = ({ item, index }) => {
    return (
      <Text
        style={{
          textAlign: "center",
          marginTop: "30%",
          color: Colors.fGrey,
          fontSize: 30,
          padding: 20,
        }}
      >
        {"Nenhum item encontrado."}
      </Text>
    );
  };

  handleSubmit = () => {
    console.log("Submit");
  };

  render() {
    const { productName } = this.state;

    return (
      <>
        <Header
          {...this.props}
          title={"Cadastrar Produto"}
          removeLeftBtn={false}
          closeBtn={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.container}>
          <View style={[styles.barCode]}>
            <Image
              style={{ width: "100%" }}
              source={require("../../../assets/barCode.png")}
            ></Image>
          </View>
          <View style={styles.saveLine}>
            <Text style={styles.txtBig}>SALVAR</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              ref={(ref) => (this.productNameRef = ref)}
              style={{
                fontSize: 16,
                paddingBottom: "1.4%",
                color: "#aaaaaa",
                height: 40,
                borderBottomColor: "rgba(0, 0, 0, 0.26)",
                borderBottomWidth: 1,
                textAlignVertical: "bottom",
              }}
              placeholder="Valor"
              autoFocus
              placeholderTextColor={"#aaaaaa"}
              keyboardType="numeric"
              autoCapitalize="none"
              onSubmitEditing={this.handleSubmit}
              returnKeyType="next"
              defaultValue={productName ? productName : null}
              value={productName}
              onChangeText={(value) => this.setState({ productName: value })}
            />
          </View>
          <View style={[styles.flexBase, { flex: 1 / 10 }]}>
            <Text style={styles.txtBig}>Clique para iniciar a pesquisa</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  barCode: {
    width: "100%",
    justifyContent: "center",
    flex: 1.5 / 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: Colors.lGrey,
  },
  saveLine: {
    flexDirection: "row",
  },
  txtBig: {
    textAlign: "center",
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "90%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    flex: 4.5 / 10,
    borderRadius: 50,
  },
});
