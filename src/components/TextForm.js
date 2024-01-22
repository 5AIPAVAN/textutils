import React,{useState} from 'react'

export default function TextForm(props) {

 const[text,setText] = useState("ENTER TEXT HERE");

 const handleUpperCaseClick = () =>{
    console.log("UPPER CASE BUTTON CLICKED");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlertfunction("Converted to UpperCase","success");
 }

 const handleOnChange = (event) =>{
    console.log("VALUE IS CHANGED IN TEXT AREA");
    setText(event.target.value);
 }

 const handleLowerCaseClick =()=>{
    console.log("LOWER CASE BUTTON CLICKED");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlertfunction("Converted to LowerCase","success");
 }

 const speak =() =>{
    console.log("SPEAK BUTTON CLICKED");
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlertfunction("Speaking","success");

 }

 const handleClear=()=>{
    console.log("CLEAR BUTTON CLCIKED");
    let newtext ="";
    setText(newtext);
    props.showAlertfunction("Cleared","success");
 }


//  const [myStyle,setmyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//  });

//  const [btnName,setbtnName] = useState("Enable Dark Mode");


//  const changeMode=()=>{
//     if(myStyle.backgroundColor === 'white'){
//         setmyStyle({
//             color:'white',
//             backgroundColor:'black',
//             border: '2px solid white'
//         });
//         setbtnName("Enable Light Mode");
//     }else{
//         setmyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setbtnName("Enable Dark Mode");
//     }
//  }

 const handleCopy=()=>{
    console.log("COPY BUTTON CLICKED");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // OR JUST USE navigator.clipboard.writeText(text); THIS ALSO WORKS FINE
    props.showAlertfunction("Copied To Clipboard","success");

 }

 const handleRemoveSpaces=()=>{
    console.log("REMOVE EXTRA SPACES BUTTON CLICKED");
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlertfunction("Extra Spaces Removed","success");
 }

 // REGULAR EXPRESSION /\s+/ IS USED HERE TO COUNT ENTITIES SEPARATED BY SPACE or MORE THAN ONE SPACE
// OR NEXT LINE ARE COUNTED AS WORDS INITIALLY WE JUST USED text.split(" ").filter(()=>{text.length!==0})
  return (
    <>

    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea  style={{backgroundColor: props.mode === 'light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}} className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary " onClick={handleUpperCaseClick}>Convert To UpperCase</button>   
    <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLowerCaseClick}>Convert To LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleClear}>Clear</button>
    <button disabled={text.length===0} onClick={speak} className="btn btn-primary mx-3">Speak</button>  
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-4" style={{color: props.mode ==='light'?'black':'white'}}>

        <h3>Your Text Summary</h3>
        <h5>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</h5>
        <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} sec taken to read</p>
        <h3>PREVIEW</h3>
        <p>{text.length>0 ? text : "ENTER TEXT TO PREVIEW"}</p>

    </div>
  




    </>
  )
}
