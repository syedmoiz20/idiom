// HomePage.tsx
import React from "react";
import { useRouter, Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import styles from "../styles/HomePage.styles";

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: "/HomePage",
        }}
      >
        <Text>Home sweet home!</Text>{" "}
      </Link>
      <Link
        href={{
          pathname: "/FlashcardQuiz",
          // /* 1. Navigate to the details route with query params */
          params: {
            flashcardSetId: "quiz1",
          },
        }}
      >
        Go to quiz
      </Link>
    </View>
  );
};

export default HomePage;
