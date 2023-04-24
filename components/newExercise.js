import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

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
    fontWeight: "bold"
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 40
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    textAlign: 'center'
  },
});

const NewExerciseScreen = () => {
    const [exerciseTitle, setExerciseTitle] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    const [savedExercise, setSavedExercise] = useState(null);
  
    const handleSaveExercise = () => {
        const newExercise = {
          id: exerciseTitle,
          title: exerciseTitle,
          type: exerciseType,
        }
        setSavedExercise(newExercise);
      }
      
    return (
        <View >
        <TextInput
          style={styles.title}
          placeholder="Click to edit"
          onChangeText={(text) => setExerciseTitle(text)}
          value={exerciseTitle}
        />
        <TextInput
        placeholder="enter your exercise!"
        style={styles.input}
        onChangeText={setExerciseType}
        value={exerciseType}
        />
        <TouchableOpacity style={styles.button} onPress={handleSaveExercise}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        {savedExercise && (
          <View>
            <Text style={styles.title}>{`Exercise: ${savedExercise.title}`}</Text>
            <Text style={styles.title}>{`Type: ${savedExercise.type}`}</Text>
          </View>
        )}
      </View>
    );
  }
  export default NewExerciseScreen