import { useState } from 'react'
import './App.css'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import Timer from './components/Timer/Timer'

function App() {
  const [topics, setTopics] = useState([
    "If you could have dinner with any historical figure, who would it be and why?",
    "Describe a book or movie that changed your perspective on life.",
    "What is the most adventurous thing you've ever done?",
    "If you were given a million dollars to start a business, what kind of business would it be?",
    "How do you handle stress and maintain work-life balance?",
    "What is a skill you wish you had and why?",
    "Describe a time when you had to step out of your comfort zone.",
    "If you could travel to any place in the world, where would you go and why?",
    "What is one piece of advice you would give to your younger self?"

  ])

  const [topicIndx, setTopicIndx] = useState(null)
  const [startTimer, setStartTimer] = useState(false)
  

  function onGiveTopic() {
    const randomIndex = Math.floor(Math.random() * 10)
    console.log("random index - " , randomIndex)
    setTopicIndx(randomIndex + 1);
  }

  function handleTimerEnd() {
    setStartTimer(true);
  }

  return (
    <>
      <h1>Hey there! Ready for a table topic?</h1>
      <button onClick={() => onGiveTopic()}>Give me a topic</button>
        {topicIndx && 
        <div>
        <h2>{topics[topicIndx]}</h2>
        <h3>Your timer will start in 15 seconds</h3>
        <CountdownTimer onTimerEnd={handleTimerEnd}/>
        </div>} 
        {startTimer && 
        <Timer/>}
    </>
  )
}

export default App
