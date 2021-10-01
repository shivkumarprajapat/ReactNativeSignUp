import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
const Cricle = () => {
  return (
    <View style={[globalStyle.centerrow, styles.circle_tab]}>
      <Text style={[styles.circle, globalStyle.bgwhite]} />
      <Text style={[styles.circle, globalStyle.redborder]} />
      <Text style={[styles.circle]} />
      <Text style={styles.circle} />
      <Text style={styles.circle} />
      <Text style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  circle_tab: { marginTop: 79 },
  circle: {
    width: 24,
    height: 24,
    marginRight: 16,
    backgroundColor: "#56565d",
    borderWidth: 1,
    borderColor: "#56565d",
    borderRadius: "100%"
  }
});

export default Cricle;
