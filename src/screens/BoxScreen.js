import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View
        style={{
          ...styles.childStyle,
          borderColor: "red",
          color: "red",
        }}
      />
      <View
        style={{
          ...styles.childStyle,
          alignSelf: "flex-end",
        }}
      />
      <View
        style={{
          ...styles.childStyle,
          borderColor: "purple",
          color: "purple",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  childStyle: {
    width: 100,
    height: 100,
    borderWidth: 2,
  },
});

export default BoxScreen;
