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
        <Text style={styles.header}>Arabic lessons</Text>{" "}
      </Link>
      <Link
        style={styles.quizButton}
        href={{
          pathname: "/FlashcardQuiz",
          // /* 1. Navigate to the details route with query params */
          params: {
            flashcardSetId: "quiz1",
          },
        }}
      >
        Sample quiz
      </Link>
      <Link
        style={styles.quizButton}
        href={{
          pathname: "/FlashcardQuiz",
          // /* 1. Navigate to the details route with query params */
          params: {
            flashcardSetId: "animals",
          },
        }}
      >
        Animals
      </Link>
    </View>
  );
};

export default HomePage;
