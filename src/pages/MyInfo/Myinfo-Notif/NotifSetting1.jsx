import React from "react";
import { ScrollView, View } from "react-native";
import { globalStyle } from "../../../globalStyle";
import Header from "../../../Components/Header";
import HeadSection from "../../../Components/HeadSection";
import MobileFooter from "../MobileFooter";
import SwitchButton from "../../../Components/SwitchButton";

const NotifSetting1 = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection title="연동 계정 설정" />
          <SwitchButton title="초대 알림" />
          <SwitchButton title="메세지 알림" />
          <SwitchButton title="혜택 및 마케팅 알림" />
        </View>
      </ScrollView>
      <MobileFooter />
    </>
  );
};

export default NotifSetting1;
