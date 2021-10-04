import React from "react";
import { View } from "react-native";
import Dialog from "../Components/Dialog";
import CodeResendData from "../pages/CodeResendData";

const CodeResend = ({ CloseModal }) => {
  return (
    <View>
      <Dialog
        title="휴대폰 번호가 바뀌셨나요?"
        data={CodeResendData}
        CloseModal={CloseModal}
      />
    </View>
  );
};

export default CodeResend;
