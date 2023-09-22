import React from "react";
import { AppNavigator } from "./app.navigator";
import { BookContextProvider } from "../../services/books/book.context";
import { HikingContextProvider } from "../../services/hikings/hiking.context";

export const Navigation = () => {
  return (
    <BookContextProvider>
      <HikingContextProvider>
        <AppNavigator />
      </HikingContextProvider>
    </BookContextProvider>
  );
};
