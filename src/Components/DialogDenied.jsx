import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import dark_time from "../icon/dark_time.svg";
const DialogDenied = ({ CloseModal }) => {
  return (
    <>
      <View style={styles.dialog}>
        <View style={[styles.icon, globalStyle.mb24]}>
          <Image
            source={dark_time}
            style={{
              width: 30,
              height: 30,
              cursor: "pointer",
              margin: "auto"
            }}
            onClick={CloseModal}
          />
        </View>
        <Text style={[styles.dialogttl, globalStyle.mb24]}>
          입력하신 정보와 일치하는
          <br />
          회원이 없습니다{" "}
        </Text>
        <View>
          <Text style={styles.ttl}>
            정확한 정보를 재입력하거나 가입을 진행해주세요{" "}
          </Text>
        </View>
        <View style={globalStyle.spacerow}>
          <Text style={styles.btn} onClick={CloseModal}>
            다시 입력
          </Text>
          <Text style={[styles.btn, globalStyle.bgwhite]}>회원 가입</Text>
        </View>
      </View>
    </>
  );
};

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
    fontWeight: 500,
    textAlign: "center"
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
    marginBottom: 40,
    textAlign: "center"
  },
  icon: {
    width: 64,
    height: 64,
    cursor: "pointer",
    backgroundColor: "#cdcdd2",
    borderRadius: "100%",
    textAlign: "center",
    margin: "auto"
  }
});

export default DialogDenied;
