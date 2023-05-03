import {
    Button,
    Keyboard,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import React, { useState } from "react";

import Card from "../../components/Card";
import Input from "../../components/Input";
import styles from "./style";

const StartGame = () => {
    const [value, setValue] = useState("");
  
    const handleInput = text => {
      setValue(text.replace(/[^0-9]/g, ""));
    };
  
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.subtitle}>Chose a number</Text>
            <Input
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              placeholder="your number"
              value={value}
              onChangeText={handleInput}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.cleanButton}>
                <Button title="Clean" />
              </View>
              <View style={styles.confirmStyle}>
                <Button title="Confirm" />
              </View>
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default StartGame;