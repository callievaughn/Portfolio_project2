import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 7,
    marginHorizontal: 100
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
  }
});

export default function RepetitionExercise({names}) {
    const [reps, setReps] = useState(0)

    const completeRep = ()=> {
        setReps(reps + 1)
    }
    const resetReps = () => {
        setReps(0)
    }

    return (
    <View>
        <Text style={styles.title}>Push Ups</Text>
        <Text style={styles.title}>Reps: {reps}</Text>
        <TouchableOpacity style={styles.button} onPress={completeRep}>
            <Text style={styles.buttonText}>Complete Rep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetReps}>
            <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
    </View>
    )
}
