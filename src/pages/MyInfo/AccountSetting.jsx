import React from "react";
import { ScrollView, View, StyleSheet, TextInput, Text } from "react-native";
import { globalStyle } from "../../globalStyle";
import Header from "../../Components/Header";
import HeadSection from "../../Components/HeadSection";
import { FaChevronRight } from "react-icons/fa";
import MobileFooter from "./MobileFooter";
const AccountSetting = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection title="계정 설정" />
          <View style={globalStyle.mb32}>
            <Text style={styles.label}>이름</Text>
            <TextInput
              style={styles.input}
              placeholder="최희재"
              value=""
              onChange=""
              placeholderTextColor="#D50000"
              placeholderTextSize="50px"
            />
          </View>
          <View style={globalStyle.mb32}>
            <Text style={styles.label}>생년월일</Text>
            <TextInput
              style={styles.input}
              placeholder="89. 08. 03"
              value=""
              onChange=""
            />
          </View>
          <View style={globalStyle.mb32}>
            <Text style={styles.label}>휴대폰 번호</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="010 6722 3489"
                value=""
                onChange=""
              />
              <Text style={styles.confirm}>등록</Text>
            </View>
          </View>
          <View style={globalStyle.mb32}>
            <Text style={styles.label}>이메일 주소</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="정보 없음"
                value=""
                onChange=""
              />
              <Text style={styles.confirm}>등록</Text>
            </View>
          </View>

          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>비밀번호 재설정</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>연동 계정 설정</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>알림 설정</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>로그아웃</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
        </View>
      </ScrollView>
      <MobileFooter />{" "}
    </>
  );
};

export default AccountSetting;
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#cdcdd2",
    marginBottom: 16
  },
  input: {
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#cdcdd2",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#85858c",
    height: 40,
    outlineWidth: 0
  },
  acc: {
    marginBottom: 40
  },
  ttl: {
    fontSize: 20,
    color: "#cdcdd2",
    fontFamily: "Pretendard"
  },
  confirm: {
    position: "absolute",
    color: "#1aff91",
    right: 0
  }
});
