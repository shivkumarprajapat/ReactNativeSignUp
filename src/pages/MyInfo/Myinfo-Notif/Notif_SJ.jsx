import React from "react";
import { ScrollView, View } from "react-native";
import { globalStyle } from "../../../globalStyle";
import Header from "../../../Components/Header";
import HeadSection from "../../../Components/HeadSection";
import MobileFooter from "../MobileFooter";
import SwitchButton from "../../../Components/SwitchButton";

const Notif_SJ = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection title="SJ 알림" />
          <SwitchButton title="구독중인 SJ 방송 시작" />
          <SwitchButton title="구독중인 SJ 신규소식" />
          <SwitchButton title="신규 SJ 공지" />
        </View>
      </ScrollView>
      <MobileFooter />
    </>
  );
};

export default Notif_SJ;
