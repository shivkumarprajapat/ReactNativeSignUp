import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DialogText = ({ subttl, desc }) => {
  return (
    <View style={[styles.dialogItem, styles.mb24]}>
      <Text style={styles.ttl}>{subttl} </Text>
      <Text style={[styles.ttl, styles.desc]}>{desc}</Text>
    </View>
  );
};
export default DialogText;

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: "#3e3e45",
    borderRedius: 20,
    padding: 24,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
    width: 414
  },
  dialogttl: {
    fontSize: 22,
    color: "#ffffff",
    fontFamily: "Pretendard",
    fontWeight: 500
  },
  btn: {
    borderRadius: 12,
    width: 175,
    height: 67,
    fontSize: 18,
    lineHeight: 67,
    fontWeight: "600",
    textAlign: "center",
    color: "#cdcdd2",
    backgroundColor: "#6e6e74",
    cursor: "pointer"
  },
  ttl: {
    color: "#fff",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15
  },
  desc: {
    color: "#9d9da3"
  }
});
