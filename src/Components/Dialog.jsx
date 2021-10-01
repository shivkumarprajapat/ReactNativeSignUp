import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import time from "../icon/time.svg";

function Dialog({ CloseModal }) {
  return (
    <>
      <View style={styles.dialog}>
        <View style={[globalStyle.spacerow, globalStyle.mb32]}>
          <Text style={styles.dialogttl}>휴대폰 번호가 바뀌셨나요?</Text>
          <Image
            source={time}
            style={{ width: 16, height: 16, cursor: "pointer" }}
            onClick={CloseModal}
          />{" "}
        </View>
        <View style={[styles.dialogItem, styles.mb24]}>
          <Text style={styles.ttl}>기존 번호 로그인 가능 </Text>
          <Text style={[styles.ttl, styles.desc]}>
            {`바뀌기 전 사용하던 번호 입력 -> 로그인 -> 설정 -> 개인정보 수정 ->번호 변경 -> 변경 프로세스 진행`}
          </Text>
        </View>
        <View style={[styles.dialogItem, styles.mb24]}>
          <Text style={styles.ttl}>기존 번호 로그인 가능 </Text>
          <Text style={[styles.ttl, styles.desc]}>
            {`바뀌기 전 사용하던 번호 입력 -> 로그인 -> 설정 -> 개인정보 수정 ->번호 변경 -> 변경 프로세스 진행`}
          </Text>
        </View>
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
