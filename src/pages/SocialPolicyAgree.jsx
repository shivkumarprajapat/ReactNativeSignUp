import React from "react";
import { SafeAreaView, Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import Header from "../Components/Header";
import checkcircle from "../icon/checkcircle_fill.svg";
import checkmarklime from "../icon/checkmarklime.svg";
import { FaChevronRight } from "react-icons/fa";
import FooterBtn from "../Components/FooterBtn";

function SocialPolicyAgree() {
  return (
    <>
      <SafeAreaView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection
            title="회원가입에 필요한"
            second="약관에 동의해주세요"
            desc="짠은 만 19세 미만 미성년자의 이용을 제한하고 있습니다"
          />

          <View style={{ marginTop: 184 }}>
            <View style={[globalStyle.row, styles.txt]}>
              <Image
                source={checkcircle}
                style={{ width: 24, height: 24, marginRight: 8 }}
              />
              <Text style={[globalStyle.p, styles.Pcolor]}>약관 전체 동의</Text>
            </View>
            <View style={[globalStyle.spacerow, globalStyle.mb24]}>
              <View style={globalStyle.row}>
                <Image
                  source={checkmarklime}
                  style={{ width: 16, height: 16, marginRight: 16 }}
                />
                <Text style={[globalStyle.p, styles.Pcolor]}>
                  만 19세 이상 성인입니다 (필수)
                </Text>
              </View>
              <View style={styles.right_icon}>
                <FaChevronRight />
              </View>
            </View>
            <View style={[globalStyle.spacerow, globalStyle.mb24]}>
              <View style={globalStyle.row}>
                <Image
                  source={checkmarklime}
                  style={{ width: 16, height: 16, marginRight: 16 }}
                />
                <Text style={[globalStyle.p, styles.Pcolor]}>
                  만 19세 이상 성인입니다 (필수)
                </Text>
              </View>
              <View style={styles.right_icon}>
                <FaChevronRight />
              </View>
            </View>
            <View style={[globalStyle.spacerow, globalStyle.mb24]}>
              <View style={globalStyle.row}>
                <Image
                  source={checkmarklime}
                  style={{ width: 16, height: 16, marginRight: 16 }}
                />
                <Text style={[globalStyle.p, styles.Pcolor]}>
                  만 19세 이상 성인입니다 (필수)
                </Text>
              </View>
              <View style={styles.right_icon}>
                <FaChevronRight />
              </View>
            </View>
            <View style={[globalStyle.spacerow, globalStyle.mb24]}>
              <View style={globalStyle.row}>
                <Image
                  source={checkmarklime}
                  style={{ width: 16, height: 16, marginRight: 16 }}
                />
                <Text style={[globalStyle.p, styles.Pcolor]}>
                  만 19세 이상 성인입니다 (필수)
                </Text>
              </View>
              <View style={styles.right_icon}>
                <FaChevronRight />
              </View>
            </View>
            <View style={[globalStyle.spacerow, globalStyle.mb24]}>
              <View style={globalStyle.row}>
                <Image
                  source={checkmarklime}
                  style={{ width: 16, height: 16, marginRight: 16 }}
                />
                <Text style={[globalStyle.p, styles.Pcolor]}>
                  만 19세 이상 성인입니다 (필수)
                </Text>
              </View>
              <View style={styles.right_icon}>
                <FaChevronRight />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <FooterBtn title="진행" />
    </>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginBottom: 40
  },
  right_icon: {
    color: "#8a8a8a",
    fontSize: 16
  },
  Pcolor: { color: "#cdcdd2" }
});
export default SocialPolicyAgree;
