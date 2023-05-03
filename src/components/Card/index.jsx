import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Card = ({ newStyles, children }) => {
  return <View style={{ ...styles.container, ...newStyles }}>{children}</View>;
};

export default Card;