import React, { useEffect, useState, useContext } from "react";
import { Text } from "../../../components/typography/text.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { FlatList, View, StyleSheet, StatusBar } from "react-native";
import { BookContext } from "../../../services/books/book.context";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { BookInfoCard } from "../components/book-info-card.component";
import { Search } from "../components/search.component";

const BookScreen = () => {
  const { books, errors } = useContext(BookContext);
  console.log(books);
  console.log(errors);

  return (
    <SafeArea>
      <Search />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="medium">
            <BookInfoCard book={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};

export default BookScreen;
