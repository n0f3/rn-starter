import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const counterReducer = (state, { type, payload }) => {
  switch (type) {
    case "change_counter":
      return {
        ...state,
        counter: state.counter + payload,
      };
    default:
      return;
  }
};

const CounterScreen = () => {
  // useState, pass in default value of state
  // const [counter, setCounter] = useState(0);
  // Refactored to use reducer
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({
            type: "change_counter",
            payload: 1,
          });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({
            type: "change_counter",
            payload: -1,
          });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
