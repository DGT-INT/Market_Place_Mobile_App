import React from "react";
import Constant from "expo-constants";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Screen({ children, style }) {
  return (
    <SafeAreaProvider style={[styles.screen, style]}>
      <SafeAreaView>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
