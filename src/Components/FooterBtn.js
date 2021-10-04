import React from "react";
import { StyleSheet, View, Text } from "react-native";
const FooterBtn = ({ title }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footertext}>{title}</Text>
    </View>
  );
};

export default FooterBtn;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 112,
    textAlign: "center",
    backgroundColor: "#f5f5f7"
  },

  footertext: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3e3e45",
    marginTop: 21,
    marginBottom: 69
  }
});
