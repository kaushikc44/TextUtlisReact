import React,{useState}  from 'react';
import translate from "translate";
import PropTypes from 'prop-types';



function Textform (props){
    const [text,setText] = useState("Enter the text");
    const handlerfunc = () => {
       const idval = document.getElementById('textform').value;
       const textUpper = idval.toUpperCase();
       setText(textUpper);
    };

    const handlerOnchange = (event) => {
        setText(event.target.value);
    };

    const handlerfuncTranslate = async () =>{
        translate.engine = "google";
        translate.key = process.env.GOOGLE_KEY;

        const textvalue = await translate(text,"fr");
        setText(textvalue);
    }
    // const funcSpace = () => {
    //     const wordcount = 0;
    //     const value = text.split(" ").length;
    //     for(let i = 0; i < value.length; i++) {
    //         if(value[i] !== " "){
    //             wordcount++;
    //         }          
    // };

    return (
        <>
        <div>
        <div className="mb-3 my-6 container">
            <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-center" style={{color:props.mode === 'light'?'#222222':'white'}}><h1>ENTER THE TEXT HERE!</h1></label>
            <textarea className="form-control" id="textform" rows="3" style={{backgroundColor:props.mode === 'light'?'#222222':'white',color:props.mode === 'light'?'white':'#222222'}} value={text} onChange={handlerOnchange}></textarea>        
            <div className='d-flex justify-content-center mx-3'><button className={`btn btn-${props.modereverse} my-3 col-3 mx-6 px-2`} onClick={handlerfunc} >submit</button>
            <button className={`btn btn-${props.modereverse} my-3 col-3 mx-6 px-2`} onClick={handlerfuncTranslate} >Submit Translate</button></div>
        </div>

        <div className='container align-items-center card'  style={{backgroundColor:props.mode === 'light'?'#222222':'white',color:props.mode === 'light'?'white':'#222222'}}>
            <h1 className="heading">The summary</h1>
            <p>The Word count is : {text.split(" ").length} and the character count is: {text.length}</p>
            <p>Time to read : {0.008 * text.split(" ").length}</p>
        </div>

        </div>
        
        </>
    )       
}

export default Textform;