import React from "react";
import { ScrollView, View } from "react-native";
import { globalStyle } from "../../../globalStyle";
import Header from "../../../Components/Header";
import HeadSection from "../../../Components/HeadSection";
import MobileFooter from "../MobileFooter";
import SwitchButton from "../../../Components/SwitchButton";

const Notif_Account = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection title="계정 알림" />
          <SwitchButton title="친구 방 초대" />
          <SwitchButton title="SJ 방 초대" />
          <SwitchButton title="배지 획득 알림" />
        </View>
      </ScrollView>
      <MobileFooter />
    </>
  );
};

export default Notif_Account;
