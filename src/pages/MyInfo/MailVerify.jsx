import React from "react";
import { Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { globalStyle } from "../../globalStyle";
import HeadSection from "../../Components/HeadSection";
import check from "../../icon/check.svg";
import LoginPassword from "../LoginPassword";
import Header from "../../Components/Header";
import Input from "../../Components/Input";

const MailVerify = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const OpenModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Header />
      <View style={globalStyle.ml24}>
        <HeadSection title="인증 번호를 입력해주세요" desc="인증번호" />
        <View>
          <View>
            <SafeAreaView style={[globalStyle.mb18, globalStyle.spacerow]}>
              <Input text="6자리 숫자" />
            </SafeAreaView>
            <View style={{ margin: "auto", marginTop: 51 }}>
              <Text style={globalStyle.smallbtn}>인증메일이 오지 않아요</Text>
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
  }
});

export default MailVerify;
