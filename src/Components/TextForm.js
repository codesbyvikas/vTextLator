import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick1=()=>{
    let newText1=text.toUpperCase()
    setText(newText1)
    props.showAlert("Converted to UppseCase","success")
  }

  const handleUpClick2=()=>{
    let newText2=text.toLowerCase()
    setText(newText2)
    props.showAlert("Converted to LowerCase","success")
  }

  const handleClear=()=>{
    let newText3=''
    setText(newText3)
    props.showAlert("Text deleted","success")
  }

  
  const handleCopy=()=>{
    var text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied Text","success")

  }

  const handleOnChange=(event)=>{
    console.log("on change")
    setText(event.target.value)

  }



  const [text, setText] = useState('')
  return (
    <div>
     <div className="container" style={{color: props.mode1==='dark'?'white':'black'}}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:
                props.mode1==='dark'?'#3f4030':'white', color: props.mode1==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
                </div>
                <div className="my-2"></div>
                <button className="btn btn-primary mx-3 " onClick={handleUpClick1}>to UPPERCASE</button>
                <button className="btn btn-primary mx-3" onClick={handleUpClick2}>to lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
                
    
     </div>
      <div className="container my-3" style={{color: props.mode1==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
    </div>
  )
}
