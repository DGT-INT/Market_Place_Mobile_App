import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingScreen from "./app/screens/ListingScreen";
import { TextInput, Text } from "react-native";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <GestureHandlerRootView>
      <Screen>
        <AppTextInput placeholder="Username" icon="email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
