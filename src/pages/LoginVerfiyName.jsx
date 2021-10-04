import React, { useState } from "react";
import {
  SafeAreaView,
  Picker,
  TextInput,
  StyleSheet,
  Text,
  View
} from "react-native";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import Input from "../Components/Input";
import Header from "../Components/Header";
function LoginVerfiyName() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <>
      <Header />
      <View style={globalStyle.ml24}>
        <HeadSection title="이름을 입력해주세요" desc="이름" />
        <View>
          <Input text="홍길동" />
        </View>
        <View>
          <SafeAreaView>
            <View style={globalStyle.mb16}>
              <Text style={styles.label}>주민등록번호</Text>
              <View style={globalStyle.row}>
                <TextInput
                  style={globalStyle.input}
                  placeholder="890803"
                  onChangeText=""
                  value=""
                />
                <Text
                  style={{
                    width: 100,
                    fontSize: 30,
                    color: "#fff",
                    textAlign: "center"
                  }}
                >
                  -
                </Text>
                <TextInput
                  style={globalStyle.input}
                  placeholder="2"
                  onChangeText=""
                  value=""
                />
                <View style={[globalStyle.centerrow, styles.circles]}>
                  <Text style={styles.circle} />
                  <Text style={styles.circle} />
                  <Text style={styles.circle} />
                  <Text style={styles.circle} />
                  <Text style={styles.circle} />
                  <Text style={styles.circle} />
                </View>
              </View>
            </View>
            <View style={globalStyle.mb16}>
              <Text style={styles.label}>전화번호</Text>
              <Picker
                selectedValue={selectedValue}
                style={[globalStyle.input, styles.bgnone]}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="LG U+ 알뜰폰" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <View style={globalStyle.mb16}>
              <Text style={styles.label}>전화번호</Text>
              <TextInput
                style={globalStyle.input}
                placeholder="010 6722 3489"
                onChangeText=""
                value=""
              />
            </View>
          </SafeAreaView>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertext}>확인</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginBottom: 10
  },
  label: {
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#cdcdd2",
    marginBottom: 8
  },
  circles: {
    marginLeft: 9
  },
  circle: {
    width: 16,
    height: 16,
    marginRight: 6,
    backgroundColor: "#56565d",
    borderWidth: 1,
    borderColor: "#56565d",
    borderRadius: "100%"
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

export default LoginVerfiyName;
