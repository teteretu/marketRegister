import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../component/Header";
import Colors from "../../constants/Colors";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyList: [
        { id: 1, name: "Confiança Max" },
        { id: 2, name: "Tauste" },
        { id: 3, name: "Pão de Açucar" },
        { id: 4, name: "Confiança Max" },
        { id: 5, name: "Tauste" },
        { id: 6, name: "Pão de Açucar" },
      ],
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ProductRegister")}
      >
        <View style={styles.itemContent}>
          <Text style={styles.itemList}>{item.name}</Text>
          <Text
            style={{
              textAlign: "center",
              color: Colors.lGrey,
              fontSize: 20,
              paddingHorizontal: 10,
            }}
          >
            Info
          </Text>
          <AntDesign name="infocirlceo" size={40} color="blue" />
        </View>
      </TouchableOpacity>
    );
  };

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

  render() {
    return (
      <>
        <Header
          title="Bem vindo"
          removeLeftBtn
          exitBtn={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.container}>
          <View style={[styles.flexBase, { flex: 1.5 / 10 }]}>
            <Text style={[styles.txtTitle, { fontWeight: "bold" }]}>
              Magic Filter
            </Text>
          </View>
          <View style={[styles.flexBase, { flex: 1 / 10 }]}>
            <Text style={[styles.txtSubTitle, { fontWeight: "bold" }]}>
              Selecione o Local de Pesquisa
            </Text>
          </View>
          <View style={[styles.flexBase, { flex: 4.5 / 10 }]}>
            <FlatList
              data={this.state.companyList}
              renderItem={this._renderItem}
              ListEmptyComponent={this._emptyList}
              keyExtractor={(item, index) => item.id}
              scrollEnabled={true}
            />
          </View>
          <View style={[styles.flexBase, { flex: 1 / 10 }]}>
            <Text style={styles.txtSubTitle}>
              Clique para iniciar a pesquisa
            </Text>
          </View>
          <View style={[styles.flexBase, { flex: 2.5 / 10 }]}>
            <Text style={styles.txtSubTitle}>Desempenho Ultimas Pesquisas</Text>
            <View style={{alignItems: "center"}}>
              <Image style={{width: "90%"}} source={require("../../../assets/charts.png")}></Image>
            </View>
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
  flexBase: {
    width: "100%",
    justifyContent: "center",
  },
  txtTitle: { textAlign: "center", color: "#000", fontSize: 40 },
  txtSubTitle: { textAlign: "center", color: "#000", fontSize: 22 },
  itemContent: {
    width: "99%",
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lGrey,
  },
  itemList: { width: "74%", color: "#000", fontSize: 22 },
});
