
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

// styles created
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
})

// my array 
// suggested exercise sends you to the other screen
const exercises = [
    { id: 'Duration', 
      title: 'Duration Exercise', 
      screen: DurationExercise, 
      suggestedExercise:{
        id: 'Repetition',
        title: 'Repetition Exercise'
      }
    },
    { 
      id: 'Repetition', 
      title: 'Repetition Exercise', 
      screen: RepetitionExercise, 
      suggestedExercise:{
        id: 'Duration',
        title: 'Duration Exercise'
      }
    }
]

// renderItem
const Home = ({navigation, exercises}) => {
   const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => navigation.navigate(item.id)}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{item.title}</Text>
    </View>
  </TouchableOpacity>
)
  return (
    <View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const Stack = createStackNavigator()

const App = () => {
return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Home">
    {(props) => <Home {...props} exercises={exercises} />}
  </Stack.Screen>
    {exercises.map((exercise) => (
  <Stack.Screen
    key={exercise.id}
    name={exercise.id}
    component={exercise.screen}
    options={({ navigation }) => ({
    // home button on left head
    headerLeft: () => (
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      ),
    headerRight: () => (
    // suggested button on right head
      <Button
        title="Suggested"
        onPress={() => {
        const suggestedExercise = exercises.find(
        (item) => item.id !== exercise.id
        )
        navigation.navigate(suggestedExercise.id);
        }}
      />
      )
    })}
    />
  ))}
  </Stack.Navigator>
  </NavigationContainer>
)}


export default App

