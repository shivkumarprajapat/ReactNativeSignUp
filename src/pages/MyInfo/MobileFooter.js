import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyle } from "../../globalStyle";
import home from "../../icon/home.svg";
import list from "../../icon/list.svg";
import favorite from "../../icon/favorite.svg";
import myinfo from "../../icon/myinfo.svg";
const MobileFooter = () => {
  return (
    <View style={[globalStyle.spacerow, styles.Navfooter]}>
      <View>
        <Image source={home} style={styles.icon} />
        <Text style={styles.ttl}>홈</Text>
      </View>
      <View>
        <Image source={list} style={styles.icon} />
        <Text style={styles.ttl}>친구 목록</Text>
      </View>
      <View>
        <View style={styles.plus}>
          <Image source={home} style={styles.icon} />
        </View>
        <Text style={styles.ttl}>한잔하기</Text>
      </View>
      <View>
        <Image source={favorite} style={styles.icon} />
        <Text style={styles.ttl}>관심사</Text>
      </View>
      <View>
        <Image source={myinfo} style={styles.icon} />
        <Text style={styles.ttl}>내 정보</Text>
      </View>
    </View>
  );
};

export default MobileFooter;

const styles = StyleSheet.create({
  Navfooter: {
    bottom: 0,
    width: "100%",
    position: "absolute",
    paddingHorizontal: 32,
    backgroundColor: "#3e3e45",
    paddingTop: 11,
    paddingBottom: 24
  },
  icon: {
    width: 24,
    height: 24,
    margin: "auto"
  },
  plus: {
    width: 56,
    height: 56,
    backgroundColor: "#f5f5f7",
    borderRadius: "100%",
    marginTop: -30
    // position: "absolute",
    // top: "-50px"
  },
  ttl: {
    paddingTop: 6,
    fontSize: 12,
    color: "#f5f5f7",
    textAlign: "center"
  }
});
