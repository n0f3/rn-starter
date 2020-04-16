import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// Tip: better to define this outside of the component
const reducer = (state, { colorToChange, amount }) => {
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  if (!state.hasOwnProperty(colorToChange)) return;

  const increasedValue = state[colorToChange] + amount;

  if (increasedValue > 255 || increasedValue < 0) return state;

  return {
    ...state,
    [colorToChange]: increasedValue,
  };
};

const SquareScreen = () => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  // Use a reducer
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          //setColor("red", COLOR_INCREMENT);
          dispatch({
            colorToChange: "red",
            amount: COLOR_INCREMENT,
          });
        }}
        onDecrease={() => {
          //setColor("red", -COLOR_INCREMENT);
          dispatch({
            colorToChange: "red",
            amount: -1 * COLOR_INCREMENT,
          });
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          //setColor("green", COLOR_INCREMENT);
          dispatch({
            colorToChange: "green",
            amount: COLOR_INCREMENT,
          });
        }}
        onDecrease={() => {
          //setColor("green", -COLOR_INCREMENT);
          dispatch({
            colorToChange: "green",
            amount: -1 * COLOR_INCREMENT,
          });
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          //setColor("blue", COLOR_INCREMENT);
          dispatch({
            colorToChange: "blue",
            amount: COLOR_INCREMENT,
          });
        }}
        onDecrease={() => {
          //setColor("blue", -COLOR_INCREMENT);
          dispatch({
            colorToChange: "blue",
            amount: -1 * COLOR_INCREMENT,
          });
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
