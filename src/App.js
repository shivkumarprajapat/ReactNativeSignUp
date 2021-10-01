import React from "react";
import { View } from "react-native";
import { globalStyle } from "./globalStyle";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Number from "./pages/Number";
import Activate from "./pages/Activate";
import LoginPassword from "./pages/LoginPassword";
import Error from "./pages/Error";
function App() {
  return (
    <View style={globalStyle.app}>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Number /> */}
      {/* <Activate /> */}
      {/* <LoginPassword /> */}
      <Error />
    </View>
  );
}
export default App;
