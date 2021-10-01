import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
function Heading({ title, span, second, desc }) {
  return (
    <>
      <View style={globalStyle.ml24}>
        <View style={styles.row}>
          <Text style={styles.title}>
            {title}
            <Text style={{ marginLeft: 10, color: "#fd3e59", fontWeight: "a" }}>
              {span}
            </Text>
            <br />
            {second}
          </Text>
        </View>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Pretendard",
    fontWeight: "bold",
    fontSize: 26,
    color: "#f5f5f7",
    marginTop: 35,
    marginBottom: 23
  },
  desc: {
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#cdcdd2",
    marginBottom: 8
  }
});

export default Heading;
