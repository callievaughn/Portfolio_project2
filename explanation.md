Option 1: Add two new components

LINK TO REPO


1. A 'add new task' component that allows the user to click the add button, be taken to a new page, and create your own exercise title and type of exercise. 
    Three new states used are 'exerciseTitle', 'exerciseType', 'savedExercise'. 'exerciseTitle' and 'exerciseType' allow the user to create the new exercise and 'savedExercise' allows it to be saved and printed to the screen.

2. A 'reset tracker' component that allows the user to see what time they clicked the reset button and logs it to the page.
    A new state 'log' added to keep track of the timer and returns the time when the user clicked the reset button. 
    'setLog' uses ternerary operator, setLog(`Logged at: ${mins}:${secs}`) to show the exact minutes and seconds the time was stopped. 