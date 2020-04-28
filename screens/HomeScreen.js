import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>S I S</Text>
      </View>
      <TouchableOpacity style={styles.settingIcon}>
        <Ionicons
          name="ios-settings"
          size={55}
          color="#c0c0c0"
          onPress={() => navigation.navigate("設定")}
        />
      </TouchableOpacity>
      <View style={styles.ItemContainer1}>
        <Text style={styles.TextHome}>ホーム</Text>
      </View>
      <View style={styles.ItemContainer2}>
        <Text style={styles.TextHome}>メッセージ</Text>
      </View>
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        <View style={styles.test} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    position: "absolute",
    top: 0,
    height: 110,
    right: 0,
    left: 0,
    backgroundColor: "#008b8b",
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  TitleText: {
    fontSize: 35,
    color: "#fff",
  },
  settingIcon: {
    position: "absolute",
    top: 35,
    left: 18,
  },
  ItemContainer1: {
    position: "absolute",
    height: 55,
    width: "50%",
    borderColor: "#008b8b",
    borderWidth: 2,
    left: 0,
    top: 110,
    backgroundColor: "#eff3c6",
    paddingTop: 8,
    alignItems: "center",
  },
  TextHome: {
    fontSize: 27,
    color: "#000",
  },
  ItemContainer2: {
    height: 55,
    width: "50%",
    borderColor: "#008b8b",
    borderWidth: 2,
    position: "absolute",
    left: "50%",
    top: 110,
    backgroundColor: "#eff3c6",
    paddingTop: 8,
    alignItems: "center",
  },
  test: {
    position: "absolute",
    backgroundColor: "gray",
    top: 200,
    width: "50%",
    height: 1300,
    left: "25%",
    borderWidth: 1,
  },
});
