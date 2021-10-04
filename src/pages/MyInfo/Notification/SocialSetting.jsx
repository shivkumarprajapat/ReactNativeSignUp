import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { globalStyle } from "../../globalStyle";
import Header from "../../Components/Header";
import HeadSection from "../../Components/HeadSection";
import { FaChevronRight } from "react-icons/fa";
import MobileFooter from "./MobileFooter";

const SocialSetting = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection title="알림 설정" />
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>비밀번호 재설정</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>SJ 알림</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>친구 알림</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>시스템 알림</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
        </View>
      </ScrollView>
      <MobileFooter />
    </>
  );
};

export default SocialSetting;
const styles = StyleSheet.create({
  acc: {
    marginBottom: 40
  },
  ttl: {
    fontSize: 20,
    color: "#cdcdd2",
    fontFamily: "Pretendard"
  }
});
