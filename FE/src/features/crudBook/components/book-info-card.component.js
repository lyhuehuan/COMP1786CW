import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import {
  BookCard,
  BookCardCover,
  Info,
  Rating,
  Section,
  BookTitle,
  BookPrice,
  BookDescription,
} from "./book-info-card.styles";

const images = [
  "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
  "https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=0&k=20&c=ZxSsWKNcVpEzrJ3_kxAUuhBCT3P_dfnmJ81JegPD8eE=",
  "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1FGRLQjvOlmhzYG0eNNv_Y5NClfu8O31Dg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhtziUi-Hm8BPQx0vCwFhwwXRhktkfdpVDA&usqp=CAU",
];

export const BookInfoCard = ({ book = {} }) => {
  const ratingArray = Array.from(new Array(Math.floor(5)));
  let randomNumber = Math.floor(Math.random() * 4);
  return (
    <BookCard elevation={5}>
      <View>
        <BookCardCover source={{ uri: images[randomNumber] }} />
      </View>
      <Info>
        <BookTitle varient="label">{book.name}</BookTitle>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Section>
          <BookDescription varient="body">
            Description: {book.description}
          </BookDescription>
          <BookPrice varient="hint">Price: {book.price}</BookPrice>
        </Section>
      </Info>
    </BookCard>
  );
};
