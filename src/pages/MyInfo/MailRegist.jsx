import React from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { globalStyle } from "../../globalStyle";
import Header from "../../Components/Header";
import HeadSection from "../../Components/HeadSection";
const MailRegist = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection
            title="이메일 주소 등록"
            desc="안전한 계정 관리를 위해 이메일을 등록해주세요!
계정에 변동 사항이 있을때 사용할 수 있어요"
          />
          <View style={[globalStyle.mb16, styles.mt40]}>
            <Text style={styles.label}>이메일 주소</Text>
            <TextInput
              style={globalStyle.input}
              placeholder="name@domain.com"
              placeholderTextColor="#6e6e74"
              onChangeText=""
              value=""
            />
          </View>
        </View>
      </ScrollView>
      <Text style={styles.btn}>인증 메일 받기</Text>
    </>
  );
};

export default MailRegist;
const styles = StyleSheet.create({
  mt40: { marginTop: 40 },
  label: {
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#cdcdd2",
    marginBottom: 8
  },
  btn: {
    paddingTop: 17,
    color: "#3e3e45",
    backgroundColor: "#6e6e74",
    textAlign: "center",
    paddingBottom: 18,
    cursor: "pointer"
  }
});
