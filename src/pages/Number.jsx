import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import Header from "../Components/Header";
import check from "../icon/check.svg";
import Dialog from "../Components/Dialog";
import Input from "../Components/Input";
function Number() {
  const [modalOpen, setModalOpen] = useState(false);
  const OpenModal = () => {
    setModalOpen(true);
  };
  const CloseModal = () => {
    setModalOpen(false);
  };

  const data = [
    {
      subttl: "기존 번호 로그인 가능",
      desc:
        "바뀌기 전 사용하던 번호 입력 -> 로그인 -> 설정 -> 개인정보 수정 ->번호 변경 -> 변경 프로세스 진행"
    },
    {
      subttl: "기존 번호 로그인 가능",
      desc:
        "바뀌기 전 사용하던 번호 입력 -> 로그인 -> 설정 -> 개인정보 수정 ->번호 변경 -> 변경 프로세스 진행"
    }
  ];
  return (
    <>
      <Header />
      <View style={globalStyle.ml24}>
        <HeadSection title="휴대폰 번호를 입력해주세요" desc="전화번호" />
        <View>
          <View>
            <Input text="010 1234 5678" />
            <View style={[globalStyle.row, styles.txt]}>
              <Image
                source={check}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text style={globalStyle.p}>번호 기억하기</Text>
            </View>
            <View style={{ margin: "auto", marginTop: 51 }}>
              <Text style={globalStyle.smallbtn} onClick={OpenModal}>
                전화번호가 바뀌었어요
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertext}>확인</Text>
      </View>
      {modalOpen && (
        <Dialog
          title="휴대폰 번호가 바뀌셨나요?"
          data={data}
          CloseModal={CloseModal}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginBottom: 10
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 112,
    textAlign: "center",
    backgroundColor: "#6e6e74"
  },
  footertext: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3e3e45",
    marginTop: 21,
    marginBottom: 69
  }
});

export default Number;
