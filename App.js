
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'
import DurationExercise from './components/DurationExercise'
import RepetitionExercise from './components/RepetitionExercise'
import NewExerciseScreen from './components/newExercise'

// styles created
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 500
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 7,
    marginHorizontal: 300
  }
})

// my array 
// suggested exercise sends you to the other screen
const exercises = [
  {
    id: 'Duration',
    title: 'Running',
    screen: DurationExercise,
    suggestedExercise: {
      id: 'Repetition',
      title: 'Repetition Exercise',
    },
  },
  {
    id: 'Repetition',
    title: 'Push Ups',
    screen: RepetitionExercise,
    suggestedExercise: {
      id: 'Duration',
      title: 'Duration Exercise',
    },
  },
]

// Home screen
const Home = ({ navigation, exercises }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.id)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
  // added navigation to new component
  const handleAddExercise = () => {
    navigation.navigate("NewExerciseScreen")
  }
  // added a button for adding a new exercise
  return (
    <View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
       <TouchableOpacity onPress={handleAddExercise}>
        <View style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createStackNavigator()

const App = () => {
  // added a stack screen for new component add exercise
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
              headerLeft: () => (
                <Button
                  title="Home"
                  onPress={() => navigation.navigate("Home")}
                />
              ),
              headerRight: () => (
                <Button
                  title="Suggested"
                  onPress={() => {
                    const suggestedExercise = exercises.find(
                      (item) => item.id !== exercise.id
                    )
                    navigation.navigate(suggestedExercise.id)
                  }}
                />
              ),
            })}
          /> 
        ))}
        <Stack.Screen
          name="NewExerciseScreen"
          component={NewExerciseScreen}
          options={{ title: "Add Exercise" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App