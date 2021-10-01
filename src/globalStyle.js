import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  app: {
    backgroundColor: "#131317",
    height: "100vh"
  },
  container: {
    alignItems: "center",
    flexDirection: "row"
  },
  row: {
    alignItems: "center",
    flexDirection: "row"
  },
  spacerow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  centerrow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  header: {
    height: 44,
    padding: 14
  },
  ml24: {
    marginLeft: 24,
    marginRight: 24
  },
  mb35: {
    marginBottom: 35
  },
  mb32: {
    marginBottom: 32
  },
  mb18: {
    marginBottom: 18
  },
  mb24: {
    marginBottom: 24
  },
  mt290: { marginTop: 290 },
  input: {
    borderWidth: 1,
    width: 366,
    height: 56,
    borderRadius: 6,
    borderColor: "#3e3e45",
    fontFamily: "Pretendard",
    fontSize: 22,
    paddingLeft: 16
  },
  p: {
    fontFamily: "Pretendard",
    fontSize: 18,
    fontWeight: "500",
    color: "#85858c"
  },

  // Button Style Class

  smallbtn: {
    borderRadius: 6,
    width: 148,
    height: 32,
    lineHeight: 32,
    fontSize: 14,
    textAlign: "center",
    color: "#cdcdd2",
    backgroundColor: "#6e6e74",
    cursor: "pointer"
  },

  bgwhite: {
    backgroundColor: "#f5f5f7",
    color: "#131317"
  },
  whitebtn: {
    backgroundColor: "whitebtn",
    borderWidth: 1,
    borderColor: "#fff"
  },
  whitetxt: {
    color: "#fff"
  },
  yellow: {
    backgroundColor: "whitebtn",
    borderWidth: 1,
    borderColor: "#fee500"
  },
  yellowtxt: {
    color: "#fee500"
  },
  border: {
    borderBottomWidth: 1,
    textAlign: "center",
    borderColor: "#6e6e74"
  },
  redborder: {
    backgroundColor: "transparent",
    borderColor: "#d9354c",
    borderWidth: 1
  }
});
