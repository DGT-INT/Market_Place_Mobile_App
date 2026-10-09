import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import { StyleSheet, FlatList } from "react-native";

import listingsApi from "../api/listings";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();

    console.log("image:", response.data[0].images);

    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
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
