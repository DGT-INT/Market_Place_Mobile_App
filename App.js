import React, { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { AsyncStorage } from "react-native";

export default function App() {
  useEffect(() => {
    NetInfo.fetch().then((netInfo) => {
      console.log(netInfo);
    });
  }, []);

  return null;
}
