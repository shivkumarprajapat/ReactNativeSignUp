import React from "react";
import { StyleSheet, Text } from "react-native";
function Heading({ ttl }) {
  return (
    <>
      <Text style={styles.title}>{ttl}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Pretendard",
    fontWeight: "bold",
    fontSize: 26,
    color: "#f5f5f7",
    marginTop: 24,
    marginBottom: 32
  }
});

export default Heading;
