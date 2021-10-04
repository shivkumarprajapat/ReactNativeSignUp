import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { globalStyle } from "../../globalStyle";
import left_arrow from "../../icon/left_arrow.svg";

const Head = () => {
  return (
    <View style={[globalStyle.spacerow, styles.head]}>
      <Image source={left_arrow} style={{ width: 16, height: 16 }} />
      <Text style={globalStyle.p}>시스템 알림</Text>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  head: {
    marginHorizontal: 16,
    marginVertical: 14
  }
});
