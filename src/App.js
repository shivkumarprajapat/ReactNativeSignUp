import React from "react";
import "./style.css";
import { View } from "react-native";
import { globalStyle } from "./globalStyle";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Number from "./pages/Number";
import Activate from "./pages/Activate";
import LoginPassword from "./pages/LoginPassword";
import Error from "./pages/Error";
import LoginVerfiyName from "./pages/LoginVerfiyName";
import SocialPolicyAgree from "./pages/SocialPolicyAgree";
import CodeResend from "./pages/CodeResend";

import Notification from "./pages/MyInfo/Notification/Notification";
import MyInfo from "./pages/MyInfo/MyInfo";
import AccountSetting from "./pages/MyInfo/AccountSetting";
import MailRegist from "./pages/MyInfo/MailRegist";
import NotifSetting from "./pages/MyInfo/NotifSetting";
import SocialSetting from "./pages/MyInfo/SocialSetting";
import NotifSetting1 from "./pages/MyInfo/Myinfo-Notif/NotifSetting1";
import Notif_Account from "./pages/MyInfo/Myinfo-Notif/Notif_Account";
import Notif_SJ from "./pages/MyInfo/Myinfo-Notif/Notif_SJ";
import NotifFriend from "./pages/MyInfo/Myinfo-Notif/NotifFriend";
import NotifSystem from "./pages/MyInfo/Myinfo-Notif/NotifSystem";
import MailVerify from "./pages/MyInfo/MailVerify";
function App() {
  return (
    <View style={globalStyle.app}>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Number /> */}
      {/* <Activate /> */}
      {/* <LoginPassword /> */}
      {/* <Error /> */}
      {/* <LoginVerfiyName /> */}
      {/* <SocialPolicyAgree /> */}
      {/* <CodeResend /> */}
      {/* <Notification /> */}
      {/* <MyInfo /> */}
      {/* <AccountSetting /> */}
      {/* <MailRegist /> */}
      {/* <MailVerify /> */}
      {/* <NotifSetting /> */}
      {/* <SocialSetting /> */}
      {/* <NotifSetting1 /> */}
      {/* <Notif_Account /> */}
      {/* <Notif_SJ /> */}
      {/* <NotifFriend /> */}
      <NotifSystem />
    </View>
  );
}
export default App;
