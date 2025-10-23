const HEAD = (
    <div style={{
    height : "50px" ,
    width :"50px" ,
    borderRadius : "100%" ,
    border :"10px solid black",
    position :"absolute" ,
    top :"50px",
    right :"-30px"
    }} />
)

const BODY = (
    <div style={{
    height : "100px" ,
    width :"10px" ,
    backgroundColor :"black",
    position :"absolute" ,
    top :"115px",
    right :"0px"
    }} />
)

const RIGHT_HAND = (
    <div style={{
    height : "10px" ,
    width :"100px" ,
    backgroundColor:"black",
    position :"absolute" ,
    top :"150px",
    right :"-100px",
    rotate :"-30deg",
    transformOrigin :"left bottom"
    }} />
)

const LEFT_HAND = (
    <div style={{
    height : "10px" ,
    width :"100px" ,
    backgroundColor:"black",
    position :"absolute" ,
    top :"150px",
    right :"10px",
    rotate :"30deg",
    transformOrigin :"right bottom"
    }} />
)

const LEFT_LEG = (
    <div style={{
    height : "10px" ,
    width :"100px" ,
    backgroundColor:"black",
    position :"absolute" ,
    top :"205px",
    right :"0px",
    rotate :"-60deg",
    transformOrigin :"right bottom"
    }} />
)

const RIGHT_LEG = (
    <div style={{
    height : "10px" ,
    width :"100px" ,
    backgroundColor:"black",
    position :"absolute" ,
    top :"205px",
    right :"-90px",
    rotate :"60deg",
    transformOrigin :"left bottom"
    }} />
)

const BODY_PARTS = [
        HEAD ,
        BODY,
        RIGHT_HAND,
        LEFT_HAND,
        RIGHT_LEG,
        LEFT_LEG
]

interface HangmanDrawingprops  {
  incorrectguesses :  number;
}


const HangmanDrawing = ({incorrectguesses} : HangmanDrawingprops) => {
  return (
  
    <div style={{position :"relative"}}>
       
       {BODY_PARTS.slice(0,incorrectguesses)}

      <div style={{
        height :"50px" ,
        width :"10px", 
        backgroundColor :"black",
        position :"absolute" ,
        top :"0px" ,
        right :"0px"
      }}/>

      <div style={{
         height :"10px",
         width :"200px" ,
         backgroundColor :"black" ,
         marginLeft :"120px"
      }}/>

      <div style={{
        height :"400px",
        width :"10px" ,
        backgroundColor :"black",
        marginLeft :"120px"
      }} />

      <div style={{
        height : "10px" ,
        width : "250px" ,
        backgroundColor :"black"
      }} />
    </div>
  )
}

export default HangmanDrawing
