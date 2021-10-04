import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import time from "../icon/time.svg";
import DialogText from "./DialogText";

function Dialog({ data, CloseModal, title }) {
  return (
    <>
      <View style={styles.dialog}>
        <View style={[globalStyle.spacerow, globalStyle.mb32]}>
          <Text style={styles.dialogttl}>{title}</Text>
          <Image
            source={time}
            style={{ width: 16, height: 16, cursor: "pointer" }}
            onClick={CloseModal}
          />
        </View>
        {data.map((item, index) => {
          return <DialogText {...item} key={index} />;
        })}
        <View style={globalStyle.spacerow}>
          <Text style={styles.btn} onClick={CloseModal}>
            닫기
          </Text>
          <Text style={[styles.btn, globalStyle.bgwhite]}>고객 센터 이동</Text>
        </View>
      </View>
    </>
  );
}

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

export default Dialog;
