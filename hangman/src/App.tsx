import { useEffect, useState } from 'react'
import words from './wordList.json'
import './App.css'
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing'
import HangmanWord from './components/HangmanWord/HangmanWord'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  const [wordToGuess , setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [ guessedLetters , setGuessedLetters] =useState<string[]>([])
  console.log(wordToGuess)
  
const incorrectLetters =guessedLetters.filter(
  letter =>  !wordToGuess.includes(letter)
 )

 const isLoser = incorrectLetters.length >= 6

 const isWinner = wordToGuess.split("")
 .every(letter => guessedLetters.includes(letter))

 function addGuessedLetter (letter : string) {
   if(guessedLetters.includes(letter) || isLoser || isWinner )
    return

   setGuessedLetters(currentLetters => [...currentLetters, letter])
 }

 useEffect (() => {
  const handler = (e : KeyboardEvent) => {
     const key = e.key

     if(!key.match(/^[a-z]$/)) return

     e.preventDefault()
     addGuessedLetter(key)
  }

  document.addEventListener("keypress" , handler)

  return () => {
    document.removeEventListener("keypress" ,handler)
  }

 } , [guessedLetters , isWinner , isLoser])
  
  return (
    <div style={{
     maxWidth : "800px" ,
     display :"flex",
     flexDirection :"column" ,
     gap :"2rem" ,
     alignItems :"center",
     margin :"0 auto"

    }}>
     <div  style={{
      fontSize :"2rem",
      textAlign :"center"
    }}
     >
      {isWinner && "Winner! - Refresh to try again"}
      {isLoser && "Nice Try - Refresh to try again"}
     </div>
     <HangmanDrawing 
     incorrectguesses={incorrectLetters.length}
     />
     <HangmanWord 
     reveal = {isLoser}
     wordToGuess={wordToGuess}
     guessedLetters={guessedLetters}
     />
     <div style={{alignSelf :"stretch"}}>
     <Keyboard  
     disabled ={isWinner || isLoser}
     activeLetters = {guessedLetters.filter(letter => 
        wordToGuess.includes(letter) 
     )}
     inactiveLetters={incorrectLetters}
     addguessedLetters ={addGuessedLetter}
     />
     </div>
    </div>
 
  )
}

export default App
