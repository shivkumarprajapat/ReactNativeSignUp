import React from "react";
import { Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import check from "../icon/check.svg";
import LoginPassword from "./LoginPassword";
import Header from "../Components/Header";
import Input from "../Components/Input";

const Activate = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const OpenModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Header />
      <View style={globalStyle.ml24}>
        <HeadSection title="휴대폰 번호를 입력해주세요" desc="전화번호" />
        <View>
          <View>
            <SafeAreaView style={[globalStyle.mb18, globalStyle.spacerow]}>
              <Input text="010 1234 5678" />
            </SafeAreaView>
            <View style={[globalStyle.row, styles.txt]}>
              <Image
                source={check}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text style={globalStyle.p}>번호 기억하기</Text>
            </View>
            <View style={{ margin: "auto", marginTop: 51 }}>
              <Text style={globalStyle.smallbtn}>전화번호가 바뀌었어요</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.signupbtn} onClick={OpenModal}>
          <Text style={[styles.fbtn]}>휴대폰 번호로 가입</Text>
        </View>
      </View>
      {modalOpen && <LoginPassword />}
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    marginBottom: 10
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  fbtn: {
    height: 56,
    lineHeight: 56,
    width: "100%",
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontWeight: "600",
    color: "#3e3e45",
    backgroundColor: "#6e6e74"
  },
  icon: {
    width: 24,
    height: 24,
    cursor: "pointer",
    backgroundColor: "#cdcdd2",
    borderRadius: "100%",
    textAlign: "center",
    marginRight: 16
  }
});

export default Activate;
