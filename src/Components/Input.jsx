import React, { useState } from "react";
import { TextInput, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { globalStyle } from "../globalStyle";
import cancel from "../icon/cancel.svg";

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
      style={[
        globalStyle.mb18,
        globalStyle.spacerow,
        globalStyle.input,
        styles.pl0
      ]}
    >
      <TextInput
        keyboardType="numeric"
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 16,
          outlineWidth: 1,
          outlineColor: "#1aff91",
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
            source={cancel}
            style={{
              width: 24,
              height: 24,
              margin: "auto"
            }}
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
  pl0: { paddingLeft: 0 },
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
    cursor: "pointer",
    marginRight: 16,
    position: "absolute",
    right: 0
  }
});

export default Input;
