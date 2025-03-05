import {View, StyleSheet, Pressable, PressableProps, StyleProp, Text} from "react-native";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<PressableProps>;
}

const Button = ({ children, onPress, style }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, { backgroundColor: pressed ? 'gray' : 'dodgerblue' }, style]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  }
});

export default Button;

