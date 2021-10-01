import React from "react";
import { Image, View } from "react-native";
import { globalStyle } from "../globalStyle";
import left_arrow from "../icon/left_arrow.svg";
function Header() {
  return (
    <View style={globalStyle.header}>
      <Image source={left_arrow} style={{ width: 16, height: 16 }} />
    </View>
  );
}

export default Header;
