import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import {
  HikingCard,
  HikingCardCover,
  Info,
  Rating,
  Section,
  HikingTitle,
  HikingPageNumber,
  HikingAuthor,
} from "./hiking-info-card.styles";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
  "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/11/hiking-forest-1056062050-770x533-1.jpg",
  "https://static.independent.co.uk/2021/06/10/15/iStock-1174494913.jpg",
  "https://www.rei.com/dam/parrish_091412_0679_main_lg.jpg",
  "https://media.glamourmagazine.co.uk/photos/643fc2efa8478149acdb8abf/16:9/w_1920,h_1080,c_limit/SOFT%20HIKING%20190423%20GS1692690_L.jpg",
];

export const HikingInfoCard = ({ hiking = {} }) => {
  const ratingArray = Array.from(new Array(Math.floor(5)));
  let randomNumber = Math.floor(Math.random() * 4);
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
          <HikingAuthor varient="body">Author: {hiking.author}</HikingAuthor>
          <HikingPageNumber varient="hint">
            Page Number: {hiking.pageNumber}
          </HikingPageNumber>
        </Section>
      </Info>
    </HikingCard>
  );
};
