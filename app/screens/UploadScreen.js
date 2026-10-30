import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoplay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/loader.json")}
            style={styles.animation}
          />
        )}
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
