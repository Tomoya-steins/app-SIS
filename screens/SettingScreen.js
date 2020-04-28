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
        <View style={styles.change}>
          <Text style={styles.changeText}>変更</Text>
        </View>
      </View>
      <View style={styles.notice}>
        <Text style={styles.acountInfo0}>通知</Text>
      </View>
      <View style={styles.noticeTab}>
        <Text style={styles.OnOff}>OFF</Text>
        <Text style={styles.OnOff}>ON</Text>
      </View>
      <View style={styles.managedEditor}>
        <Text style={styles.managedEditorText}>管理者用設定</Text>
      </View>
      <View style={styles.logout}>
        <Text style={styles.acountInfo}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
    height: 150,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  change: {
    position: "absolute",
    borderColor: "black",
    borderWidth: 1,
    width: 70,
    height: 40,
    backgroundColor: "#4682b4",
    bottom: 5,
    right: 15,
    alignItems: "center",
    justifyContent: "center",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomRightRadius: 30,
  },
  changeText: {
    fontSize: 20,
    color: "white",
  },
  acountInfo: {
    fontSize: 27,
    paddingLeft: 20,
  },
  acountInfo0: {
    fontSize: 20,
    opacity: 0.7,
  },
  notice: {
    position: "absolute",
    top: 213,
  },
  noticeTab: {
    position: "absolute",
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "100%",
    top: 240,
    height: 80,
  },
  OnOff: {
    fontSize: 20,
  },
  managedEditor: {
    position: "absolute",
    top: 500,
    right: 15,
  },
  managedEditorText: {
    fontSize: 25,
    color: "blue",
    opacity: 0.8,
  },
  logout: {
    position: "absolute",
    top: 365,
    borderWidth: 1,
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
