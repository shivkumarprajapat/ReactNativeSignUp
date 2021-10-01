import React, { useState } from "react";
import {
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View
} from "react-native";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import check from "../icon/check.svg";
import LoginPassword from "./LoginPassword";
import Header from "../Components/Header";
import dark_time from "../icon/dark_time.svg";

const Activate = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const OpenModal = () => {
    setModalOpen(true);
  };
  const [inputfield, setInputField] = useState("");
  const TypeText = (e) => {
    setInputField(e.target.value);
  };
  const ClearText = () => {
    setInputField("");
  };
  return (
    <>
      <View>
        <Header />
        <HeadSection title="휴대폰 번호를 입력해주세요" desc="전화번호" />
        <View style={globalStyle.ml24}>
          <View>
            <SafeAreaView
              style={[
                globalStyle.mb18,
                globalStyle.spacerow,
                globalStyle.input,
                styles.lime
              ]}
            >
              <TextInput
                keyboardType="numeric"
                style={{
                  outline: 0,
                  fontSize: 22,
                  color: "#6e6e74"
                }}
                value={inputfield}
                onChange={TypeText}
                placeholder="010 1234 5678"
              />
              {inputfield.length > 0 ? (
                <View style={styles.icon} onClick={ClearText}>
                  <Image
                    source={dark_time}
                    style={{ width: 14, height: 14, margin: "auto" }}
                  />
                </View>
              ) : null}
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
  lime: {
    borderColor: "#1aff91"
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
