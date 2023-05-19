import React, { useState } from "react";

const TextForm=(props)=>{
    const handleupClick=()=>{
        // console.log("upperCase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to upperCase!", "Successfull")

    }
    const handlelowClick=()=>{
        // console.log("upperCase was clicked"+text);
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowerCase!", "Successfull")
    }
    const handleClear=()=>{
        let newtext="";
        setText(newtext)
        props.showAlert("Cleared", "Successfull")
    }
    const changeHandler=(event)=>{
        console.log("onChange");
        setText(event.target.value)

    }
    const[text,setText]= useState("");

    return(
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
            <textarea className="form-control"  onChange={changeHandler} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} id="TextArea" rows="7"></textarea>
            </div>
             <button className="btn btn-primary mx-2" onClick={handleupClick} >Convert to upperCase</button>
             <button className="btn btn-primary mx-2" onClick={handlelowClick} >Convert to LowerCase</button>
             <button className="btn btn-primary mx-2" onClick={handleClear} >ClearText</button>
        </div>
        <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}} >
            <h2>your Text Summary</h2>
            <p>{text.split(" ").length}words and {text.length}letters</p>
            <p>{0.08*text.split(" ").length}Minutes to read</p>
        </div>
        </>
    )
}
export default TextForm