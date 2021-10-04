import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { globalStyle } from "../../../globalStyle";
import Head from "../Head";
import Heading from "../Heading";
const Notification = () => {
  return (
    <ScrollView>
      <Head />
      <View style={globalStyle.ml24}>
        <Heading title="알림" />
        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>시스템 알림</Text>
            <Text style={styles.p}>방금 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            보안 강화를 위해 이메일 주소를 등록해주세요
          </Text>
        </View>
        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>SJ 알림</Text>
            <Text style={styles.p}>5분 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            윤종신 님의 방송이 10분 뒤 시작해요!
          </Text>
        </View>

        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>친구 알림</Text>
            <Text style={styles.p}>30분 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            이명숙 님이 ‘술고래’ 배지를 획득했어요
          </Text>
        </View>

        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>이명숙 님이 ‘술고래’ 배지를 획득했어요</Text>
            <Text style={styles.p}>1시간 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            윤종신 님의 방송이 1시간 뒤 시작해요!
          </Text>
        </View>

        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>SJ 알림</Text>
            <Text style={styles.p}>5시간 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            문상훈 님이 신규 SJ로 등록되었어요!
            <br />
            다음 방송 일정을 확인하고 알림 설정하세요
          </Text>
        </View>
        <View style={globalStyle.mb35}>
          <Text style={globalStyle.border}>
            <Text style={styles.btnt}>또는</Text>
          </Text>
        </View>
        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>SJ 알림</Text>
            <Text style={styles.p}>2일 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            슈퍼주니어 규현 님의 방송이 지금 시작되었어요!
          </Text>
        </View>
        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>시스템 알림</Text>
            <Text style={styles.p}>3일 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            신규 업데이트 출시! 앱을 최신 버전으로 유지하세요
          </Text>
        </View>
        <View>
          <View style={[globalStyle.spacerow, globalStyle.mb16]}>
            <Text style={styles.p}>SJ 방송 알림</Text>
            <Text style={styles.p}>3일 전</Text>
          </View>
          <Text style={[globalStyle.tcgray, globalStyle.mb32]}>
            윤종신 님의 방송이 10분 뒤 시작해요!{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  btnt: {
    color: "#6e6e74",
    fontSize: 14,
    width: 50,
    fontWeight: "500",
    display: "inline-block",
    backgroundColor: "#131317",
    position: "absolute",
    top: "-10px",
    left: "50%",
    transform: "translate(-50%, -10%)"
  },
  p: {
    fontFamily: "Pretendard",
    fontSize: 16,
    fontWeight: "500",
    color: "#6e6e74"
  }
});
