import styles from "./Keyboard.module.css"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

interface Keyboardprops {
  disabled? : boolean
  activeLetters : Array<string>
  inactiveLetters : Array<string>
  addguessedLetters :(letter : string)=>void
  
}

const Keyboard = ({disabled = false ,activeLetters ,inactiveLetters , addguessedLetters} : Keyboardprops) => {
  return (
    <div style={{
        display :"grid" ,
        gridTemplateColumns :"repeat(auto-fit , minmax(75px, 1fr) )" ,
        gap: ".50rem"
    }}>
     {KEYS.map((key) => {
      const isActive = activeLetters.includes(key)
      const isInactive = inactiveLetters.includes(key)
        return (
            <button
             onClick={() =>addguessedLetters(key)}
             className={`
              ${styles.btn} 
              ${isActive ? styles.active : ""} 
              ${isInactive ? styles.inactive : ""}
             `}
             disabled = {isActive || isInactive || disabled}
             key={key}
             >
              {key}
              </button>
        )
     })}
    </div>
  )
}

export default Keyboard
