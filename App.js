import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingScreen from "./app/screens/ListingScreen";
import { TextInput, Text, Switch } from "react-native";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen></LoginScreen>;
}
