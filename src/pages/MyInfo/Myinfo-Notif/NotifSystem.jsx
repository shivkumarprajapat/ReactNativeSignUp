import React from "react";
import { ScrollView, View } from "react-native";
import { globalStyle } from "../../../globalStyle";
import Header from "../../../Components/Header";
import HeadSection from "../../../Components/HeadSection";
import MobileFooter from "../MobileFooter";
import SwitchButton from "../../../Components/SwitchButton";

const NotifSystem = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection title="시스템 알림" />
          <SwitchButton title="혜택 및 마케팅 알림" />
          <SwitchButton title="혜택 및 마케팅 알림" />
          <SwitchButton title="신고 및 경고" />
          <SwitchButton title="버전 업데이트" />
        </View>
      </ScrollView>
      <MobileFooter />
    </>
  );
};

export default NotifSystem;
