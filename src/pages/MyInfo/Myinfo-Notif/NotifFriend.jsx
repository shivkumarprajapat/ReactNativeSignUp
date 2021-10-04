import React from "react";
import { ScrollView, View } from "react-native";
import { globalStyle } from "../../../globalStyle";
import Header from "../../../Components/Header";
import HeadSection from "../../../Components/HeadSection";
import MobileFooter from "../MobileFooter";
import SwitchButton from "../../../Components/SwitchButton";

const NotifFriend = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={globalStyle.ml24}>
          <HeadSection title="친구 알림" />
          <SwitchButton title="친구 요청 / 수락" />
          <SwitchButton title="친구의 배지 획득" />
          <SwitchButton title="친구의 짠 접속" />
          <SwitchButton title="친구의 방 참여" />
        </View>
      </ScrollView>
      <MobileFooter />
    </>
  );
};

export default NotifFriend;
