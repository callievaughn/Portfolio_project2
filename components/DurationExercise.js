import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

let currentTimer = 0

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
    fontWeight: 'bold',
  },
  text: {
  textAlign: 'center',
  fontSize: 20,
  padding: 15,
  }
});

const DurationExercise = () => {

    // used screenshot from professor Murray on canvas
    // stopwatch/timer implementation

    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(()=> {
        if (running) {
            setTimer((timer)=> timer+10)
        }
    }, [running])
    useEffect(()=> {
        currentTimer= setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
    },[running])
    let startStop = useCallback(()=> {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])
    
    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")
    
    return (
          <View>
            <Text style={styles.title}>Running</Text>
            <Text style={styles.text}>Timer: {mins}:{secs}</Text>
            <TouchableOpacity style={styles.button} onPress={startStop}>
                <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> {setTimer(0)}}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    ) 
}
export default DurationExercise