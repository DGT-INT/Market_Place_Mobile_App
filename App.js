import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <GestureHandlerRootView>
      <Screen>
        {/* <ImageInputList
          imageUris={imageUris}
          onAddImage={(uri) => handleAdd(uri)}
          onRemoveImage={(uri) => handleRemove(uri)}
        /> */}
        <ListingEditScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}
