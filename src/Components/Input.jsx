import React, { useState } from "react";
import { TextInput, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { globalStyle } from "../globalStyle";
import dark_time from "../icon/dark_time.svg";

const Input = ({ text }) => {
  const [inputfield, setInputField] = useState("");
  const TypeText = (e) => {
    setInputField(e.target.value);
  };
  const ClearText = () => {
    setInputField("");
  };

  return (
    <SafeAreaView
      style={[globalStyle.mb18, globalStyle.spacerow, globalStyle.input]}
    >
      <TextInput
        keyboardType="numeric"
        style={{
          outline: 0,
          fontSize: 22,
          color: "#6e6e74"
        }}
        value={inputfield}
        onChange={TypeText}
        placeholder={text}
      />
      {inputfield.length > 0 ? (
        <View style={styles.icon} onClick={ClearText}>
          <Image
            source={dark_time}
            style={{ width: 14, height: 14, margin: "auto" }}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txt: {
    marginBottom: 10
  },
  footer: {
    marginTop: 147
  },
  fbtn: {
    height: 56,
    lineHeight: 56,
    width: "100%",
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontWeight: "600",
    color: "#3e3e45",
    backgroundColor: "#6e6e74"
  },
  icon: {
    width: 24,
    height: 24,
    cursor: "pointer",
    backgroundColor: "#cdcdd2",
    borderRadius: "100%",
    textAlign: "center",
    marginRight: 16
  }
});

export default Input;
