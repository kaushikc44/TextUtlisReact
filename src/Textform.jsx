import React,{useState}  from 'react';
import translate from "translate";



function Textform (){
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

    return (
        <>
        <div className="mb-3 my-6 container">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="textform" rows="3" value={text} onChange={handlerOnchange}></textarea>        
            <div className='d-flex justify-content-center mx-3'><button className='btn btn-dark my-3 col-3 mx-6 px-2' onClick={handlerfunc} >submit</button>
            <button className='btn btn-dark my-3 col-3 mx-6 px-2' onClick={handlerfuncTranslate} >Submit Translate</button></div>
        </div>

        <div className='container align-items-center card'>
            <h1 className="heading">The summary</h1>
            <p>The Word count is : {text.split(" ").length} and the character count is: {text.length}</p>
            <p>Time to read : {0.008 * text.split(" ").length}</p>
        </div>
        </>
    )       
}

export default Textform;