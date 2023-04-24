import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

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
  },
  logText: {
    textAlign: 'center',
    fontSize: 15,
    padding: 15,
    color: 'gray'
  }
})

// new component 
// uses parameter log
const Log = ({ log }) => {
  if (!log) {
    return null
  }
  return (
    <Text style={styles.logText}>{log}</Text>
  )
}

const DurationExercise = () => {
  let [running, setRunning] = useState(false)
  let [timer, setTimer] = useState(0)
  //new state to implememnt log
  let [log, setLog] = useState('')

  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10)
    }
  }, [running])

  useEffect(() => {
    let currentTimer = setInterval(updateTimer, 10)
    return () => clearInterval(currentTimer)
  }, [running])

  let startStop = useCallback(() => {
    setRunning(!running)
    // implementeed setLog for start/pause button
    if (!running) {
      setLog(`Started at: ${new Date().toLocaleTimeString()}`)
    } else {
      setLog(`Paused at: ${new Date().toLocaleTimeString()}`)
    }
  }, [running])

  let mins = (Math.floor((timer / (1000 * 60)) % 60)).toString().padStart(2, "0")
  let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")

  return (
    // implementeed setLog for reset button
    <View>
      <Text style={styles.title}>Running</Text>
      <Text style={styles.text}>Timer: {mins}:{secs}</Text>
      <Log log={log} />
      <TouchableOpacity style={styles.button} onPress={startStop}>
        <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        setTimer(0)
        setLog(`Reset at: ${mins}:${secs}`)
      }}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DurationExercise
