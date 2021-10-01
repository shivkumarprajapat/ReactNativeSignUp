import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import check from "../icon/check.svg";
import Dialog from "../Components/Dialog";
import Input from "../Components/Input";
import Header from "../Components/Header";
function Number() {
  const [modalOpen, setModalOpen] = useState(false);
  const OpenModal = () => {
    setModalOpen(true);
  };
  const CloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <View>
        <Header />
        <HeadSection title="휴대폰 번호를 입력해주세요" desc="전화번호" />
        <View style={globalStyle.ml24}>
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
      {modalOpen && <Dialog CloseModal={CloseModal} />}
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
