import React, { useContext } from "react";
import { Alert, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import {
  HikingCard,
  HikingCardCover,
  Info,
  Rating,
  Section,
  HikingTitle,
  HikingDate,
  HikingDifficultLevel,
  HikingLengthOfHike,
  HikingDescription,
} from "./hiking-info-card.styles";

import { HikingContext } from "../../../services/hikings/hiking.context";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
  "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/11/hiking-forest-1056062050-770x533-1.jpg",
  "https://static.independent.co.uk/2021/06/10/15/iStock-1174494913.jpg",
  "https://www.rei.com/dam/parrish_091412_0679_main_lg.jpg",
  "https://media.glamourmagazine.co.uk/photos/643fc2efa8478149acdb8abf/16:9/w_1920,h_1080,c_limit/SOFT%20HIKING%20190423%20GS1692690_L.jpg",
];

export const HikingInfoCard = ({ onUpdate, hiking = {} }) => {
  const ratingArray = Array.from(new Array(Math.floor(5)));
  let randomNumber = Math.floor(Math.random() * 4);

  const { deleteHiking } = useContext(HikingContext);

  const onDelete = () => {
    Alert.alert("Confirm", "Do you want to delete?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteHiking(hiking.id) },
    ]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return month + "=" + day + "=" + year;
  };

  return (
    <HikingCard elevation={5}>
      <View>
        <HikingCardCover source={{ uri: images[randomNumber] }} />
      </View>
      <Info>
        <HikingTitle varient="label">{hiking.name}</HikingTitle>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Section>
          <HikingDate varient="body">
            Packing Availabel: {hiking.parkingAvailable ? "YES" : "NO"}
          </HikingDate>
        </Section>
        <Section>
          <HikingLengthOfHike varient="body">
            Length Of Hike: {hiking.lengthOfHike}
          </HikingLengthOfHike>
          <HikingDifficultLevel varient="hint">
            Difficult Level: {hiking.difficultLevel}
          </HikingDifficultLevel>
        </Section>
        <Section>
          <HikingDescription varient="body">
            Description: {hiking.description}
          </HikingDescription>
        </Section>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => onUpdate(hiking)}
            style={styles.buttonUpdate}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete(hiking)}
            style={styles.buttonDelete}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Info>
    </HikingCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  buttonUpdate: {
    flex: 1,
    backgroundColor: "orange",
    padding: 10,
    margin: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonDelete: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
    margin: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
