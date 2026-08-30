import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  Platform,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/assets/WelcomeScreen";
import ViewImageScreen from "./app/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
