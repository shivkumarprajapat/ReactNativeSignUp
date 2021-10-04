import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import { globalStyle } from "../globalStyle";
import HeadSection from "../Components/HeadSection";
import DialogDenied from "../Components/DialogDenied";
import Cricle from "../Components/Circle";
function Error() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const OpenModal = () => {
    setModalOpen(true);
  };
  const CloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Header />
      <View style={globalStyle.ml24}>
        <View style={{ margin: "auto", textAlign: "center" }}>
          <HeadSection
            title="입력한 비밀번호가 다릅니다다시 입력해주세요"
            span="(1/5)"
          />
        </View>
        <View style={{ margin: "auto" }}>
          <Text style={styles.number}>010 6722 3489</Text>
        </View>
      </View>
      <Cricle />
      <View style={{ margin: "auto", marginTop: 51 }} onClick={OpenModal}>
        <Text style={globalStyle.smallbtn}>전화번호가 바뀌었어요</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertext}>확인</Text>
      </View>
      {modalOpen && <DialogDenied CloseModal={CloseModal} />}
    </>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginBottom: 10
  },
  circle_tab: { marginTop: 79 },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 112,
    textAlign: "center",
    backgroundColor: "#6e6e74"
  },
  footertext: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3e3e45",
    marginTop: 21,
    marginBottom: 69
  },
  number: {
    color: "#85858c",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderColor: "#85858c"
  }
});

export default Error;
