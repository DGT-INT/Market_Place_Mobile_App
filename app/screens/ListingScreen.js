import React, { useEffect } from "react";
import Screen from "../components/Screen";
import { StyleSheet, FlatList } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import ActivityIndicator from "../components/ActivityIndicator";
import useAPI from "../hooks/useAPI";

function ListingScreen({ navigation }) {
  const {
    request: loadListings,
    data: listings,
    error,
    loading,
  } = useAPI(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}

      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageURL={item.images[0].url.replace("192.168.0.14", "localhost")}
            onPress={() => navigation.navigate(routes.LISTINGS_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
