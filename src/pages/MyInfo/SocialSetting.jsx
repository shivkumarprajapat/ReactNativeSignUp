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
          <HeadSection title="연동 계정 설정" />
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>카카오톡 계정</Text>
            <Text style={styles.ttl}>
              <FaChevronRight />
            </Text>
          </View>
          <View style={[globalStyle.spacerow, styles.acc]}>
            <Text style={styles.ttl}>애플 계정</Text>
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
