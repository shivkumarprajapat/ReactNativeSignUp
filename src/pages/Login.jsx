import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import Header from "../Components/Header";
function Login() {
  return (
    <>
      <Header />
      <View style={globalStyle.ml24}>
        <HeadSection
          title="짠에 돌아오신 것을"
          second="환영합니다!"
          desc="처음 가입한 방식으로 로그인 해주세요"
        />
        <View style={globalStyle.mt290}>
          <View style={globalStyle.mb35}>
            <View style={styles.signupbtn}>
              <Image
                source={{
                  uri:
                    "https://cdn.zeplin.io/6139a4a1e4316bb9277ae55c/assets/85A0E49F-421F-4DF4-AEF9-24D463D610DD.svg"
                }}
                style={{ width: 16, height: 16, marginLeft: 20 }}
              />
              <Text style={[styles.btn, styles.btntxt]}>
                휴대폰 번호로 가입
              </Text>
            </View>
          </View>
          <View style={globalStyle.mb35}>
            <Text style={globalStyle.border}>
              <Text style={styles.btnt}>또는</Text>
            </Text>
          </View>
          <View style={globalStyle.mb24}>
            <View style={[styles.signupbtn, globalStyle.whitebtn]}>
              <Image
                source={{
                  uri:
                    "https://cdn.zeplin.io/6139a4a1e4316bb9277ae55c/assets/85A0E49F-421F-4DF4-AEF9-24D463D610DD.svg"
                }}
                style={{ width: 16, height: 16, marginLeft: 20 }}
              />
              <Text style={[styles.btn, globalStyle.whitetxt]}>
                Apple 계정으로 가입
              </Text>
            </View>
          </View>
          <View>
            <View style={[styles.signupbtn, globalStyle.yellow]}>
              <Image
                source={{
                  uri:
                    "https://cdn.zeplin.io/6139a4a1e4316bb9277ae55c/assets/85A0E49F-421F-4DF4-AEF9-24D463D610DD.svg"
                }}
                style={{ width: 16, height: 16, marginLeft: 20 }}
              />
              <Text style={[styles.btn, globalStyle.yellowtxt]}>
                카카오 계정으로 가입
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  signupbtn: {
    width: 366,
    height: 56,
    lineHeight: 56,
    borderRadius: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center"
  },
  btn: {
    width: "90%",
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontWeight: "600",
    color: "#000"
  },
  whitebtn: {
    backgroundColor: "whitebtn",
    borderWidth: 1,
    borderColor: "#fff"
  },
  whitetxt: {
    color: "#fff"
  },
  yellow: {
    backgroundColor: "whitebtn",
    borderWidth: 1,
    borderColor: "#fee500"
  },
  yellowtxt: {
    color: "#fee500"
  },
  border: {
    borderBottomWidth: 1,
    textAlign: "center",
    borderColor: "#6e6e74"
  },
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
  }
});

export default Login;
