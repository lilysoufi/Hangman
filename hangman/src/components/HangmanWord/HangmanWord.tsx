interface HangmanWordprops {
  reveal?: boolean
  wordToGuess : string ,
  guessedLetters : Array<string>
}

const HangmanWord = ({reveal ,wordToGuess , guessedLetters} : HangmanWordprops) => {

  
    
  return (
    <div style={{
        display :"flex" ,
        gap :".25em" ,
        fontSize :"6rem",
        fontWeight :"bold",
        textTransform :"uppercase" ,
        fontFamily :"monospace"
    }}>
      {wordToGuess.split("").map((letter ,index) => {
        return (
        <span style={{borderBottom :".1em solid black" }} key={index}>
        <span style={{
            visibility :
            guessedLetters.includes(letter) || reveal 
            ? "visible" 
            : "hidden",
            color : !guessedLetters.includes(letter) && reveal 
            ? "red"
            : "black"
        }}>{letter}</span>
        </span>
        )
      })}
    </div>
  )
}

export default HangmanWord
