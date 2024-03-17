import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "darkturquoise" },
        headerTintColor: "black",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    ></Stack>
  );
};

export default StackLayout;
