import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";
import { globalStyle } from "../globalStyle";
const SwitchButton = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={[globalStyle.spacerow, styles.acc]}>
      <Text style={styles.ttl}>{title}</Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#3e3e45", true: "#13b668" }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switch: {
    height: 32,
    width: 55
  },
  acc: {
    marginBottom: 40
  },
  ttl: {
    fontSize: 20,
    color: "#cdcdd2",
    fontFamily: "Pretendard"
  }
});

export default SwitchButton;
