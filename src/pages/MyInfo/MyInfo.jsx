import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { globalStyle } from "../../globalStyle";
import Heading from "./Heading";
import setting from "../../icon/setting.svg";
import left_arrow from "../../icon/left_arrow.svg";
import { FaChevronRight } from "react-icons/fa";
import MobileFooter from "./MobileFooter";
const MyInfo = () => {
  return (
    <>
      <ScrollView>
        <View style={globalStyle.ml24}>
          <View style={globalStyle.spacerow}>
            <Heading ttl="최희재 님" />
            <View style={[globalStyle.row, styles.button]}>
              <Image
                source={setting}
                style={{ width: 16, height: 16, marginRight: 10 }}
              />
              <Text style={styles.btnttl}>계정 설정</Text>
            </View>
          </View>
          <Text style={styles.p}>나의 배지</Text>
          <View style={globalStyle.row}>
            <View style={styles.item}>
              <View style={styles.img}>
                <Image source={left_arrow} style={{ width: 25, height: 25 }} />
              </View>
              <Text style={styles.item_p}>첫짠은 원샷</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.img}>
                <Image source={left_arrow} style={{ width: 25, height: 25 }} />
              </View>
              <Text style={styles.item_p}>짠 단골손님</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.img}>
                <Image source={left_arrow} style={{ width: 25, height: 25 }} />
              </View>
              <Text style={styles.item_p}>축! 방장 데뷔</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.img}>
                <Image source={left_arrow} style={{ width: 25, height: 25 }} />
              </View>
              <Text style={styles.item_p}>첫짠은 원샷</Text>
            </View>
          </View>
          <View style={styles.txt}>
            <Text style={styles.p}>고객센터</Text>
            <View>
              <View style={[globalStyle.spacerow, styles.acc]}>
                <Text style={styles.ttl}>자주 묻는 질문</Text>
                <Text style={styles.ttl}>
                  <FaChevronRight />
                </Text>
              </View>
              <View style={[globalStyle.spacerow, styles.acc]}>
                <Text style={styles.ttl}>개인정보 처리 방침</Text>
                <Text style={styles.ttl}>
                  <FaChevronRight />
                </Text>
              </View>
              <View style={[globalStyle.spacerow, styles.acc]}>
                <Text style={styles.ttl}>서비스 이용 약관</Text>
                <Text style={styles.ttl}>
                  <FaChevronRight />
                </Text>
              </View>
              <View style={[globalStyle.spacerow, styles.acc]}>
                <Text style={styles.ttl}>1:1 채널 문의</Text>
                <Text style={styles.ttl}>
                  <FaChevronRight />
                </Text>
              </View>
              <View style={[globalStyle.spacerow, styles.acc]}>
                <Text style={styles.ttl}>버전 정보: 1.1.0</Text>
                <Text style={[styles.ttl, globalStyle.tcgreen]}>업데이트</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <MobileFooter />
    </>
  );
};

export default MyInfo;
const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#979197",
    textAlign: "center",
    cursor: "pointer"
  },
  btnttl: {
    fontSize: 14,
    color: "#fff"
  },
  p: {
    fontSize: 14,
    color: "#6e6e74",
    marginBottom: 16
  },
  item: {
    width: 96,
    height: 96,
    borderRadius: 10,
    backgroundColor: "#3e3e45",
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 30,
    marginRight: 16
  },
  img: {
    width: 56,
    margin: "auto",
    borderRadius: 10,
    height: 56,
    backgroundColor: "#26262e",
    alignItems: " center",
    justifyContent: "center"
  },
  item_p: {
    textAlign: "center",
    marginTop: 6,
    fontSize: 12,
    paddingBottom: 9,
    color: "#cdcdd2"
  },
  txt: {
    marginTop: 40
  },
  acc: {
    marginBottom: 40
  },
  ttl: {
    fontSize: 20,
    color: "#cdcdd2",
    fontFamily: "Pretendard"
  }
});
