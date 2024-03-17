import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import styles from "../styles/FlashcardQuiz.styles";
import { flashcardSets } from "../flashcardSets/flashcardSets";

export interface Flashcard {
  question: string;
  answer: string;
}

const FlashcardQuiz: React.FC<any> = () => {
  const params = useLocalSearchParams();
  const flashcards: Flashcard[] = flashcardSets[params.flashcardSetId];
  console.info(`flashcards: ${JSON.stringify(flashcards[0])}`);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const currentFlashcard = flashcards[currentCardIndex];

  const handleToggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  const handlePreviousCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  const showPreviousButton = currentCardIndex > 0;
  const showNextButton = currentCardIndex < flashcards.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{currentFlashcard.question}</Text>
      </View>
      {showAnswer && (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{currentFlashcard.answer}</Text>
        </View>
      )}
      <Button
        title={showAnswer ? "Hide Answer" : "Show Answer"}
        onPress={handleToggleAnswer}
      />
      {showPreviousButton && (
        <Button title="Previous Card" onPress={handlePreviousCard} />
      )}
      {showNextButton && <Button title="Next Card" onPress={handleNextCard} />}
    </View>
  );
};

export default FlashcardQuiz;
