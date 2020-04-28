import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.acount}>
        <Text style={styles.acountInfo0}>アカウント情報</Text>
      </View>
      <View style={styles.acountInfoTab}>
        <Text style={styles.acountInfo}>ID :</Text>
        <Text style={styles.acountInfo}>PassWord : チョメチョメ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  acount: {
    position: "absolute",
    top: 13,
    left: 7,
  },
  acountInfoTab: {
    position: "absolute",
    top: 45,
    left: 0,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: 90,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  acountInfo: {
    fontSize: 27,
    paddingLeft: 20,
  },
  acountInfo0: {
    fontSize: 20,
    opacity: 0.7,
  },
});
