import React from 'react'

export default function About(props) {
  return (

          
                          <div className="container" style={{color: props.mode1==='dark'?'white':'black'}}>
                            <h2 className='my-3'>About Us</h2>
                          <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button"  style={{backgroundColor:
                             props.mode1==='dark'?'#3f4030':'white', color: props.mode1==='dark'?'white':'black'}}
                              type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                               aria-expanded="true" aria-controls="collapseOne">
                         About me
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" style={{backgroundColor:
                             props.mode1==='dark'?'#9f9c7f':'white', color: props.mode1==='dark'?'white':'black'}}
                              data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>Greetings! I'm Vikas Kewat</strong>, an enthusiastic Computer Engineering student with a 
                          passion for technology and a knack for crafting innovative solutions. 
                          I welcome you to <strong> vTextLator</strong>, my first React project.<br></br>
                          </div>
                      </div>
                      </div>
                      <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor:
                             props.mode1==='dark'?'#3f4030':'white', color: props.mode1==='dark'?'white':'black'}}
                              type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Connect with me here
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:
                             props.mode1==='dark'?'#9f9c7f':'white', color: props.mode1==='dark'?'white':'black'}}>
                        <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/vikas-kewat-078a0a256">
                          <strong>LinkedIn: </strong>https://www.linkedin.com/in/vikas-kewat-078a0a256</a><br></br>
                        <a className="nav-link active" aria-current="page" href="https://github.com/codesbyvikas">
                          <strong>GitHub: </strong>https://github.com/codesbyvikas</a><br></br>
                         <a className="nav-link active" aria-current="page" href="https://mail.google.com/mail/u/0/?fs=1&to=vikaskewat025@gmail.com&su=&body=&bcc=&tf=cm">
                          <strong>Email: </strong>vikaskewat025@gmail.com</a><br></br> 
                        </div>
                      </div>
                      </div>
                      <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor:
                               props.mode1==='dark'?'#3f4030':'white', color: props.mode1==='dark'?'white':'black'}}
                               type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         About vTextLator
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:
                             props.mode1==='dark'?'#9f9c7f':'white', color: props.mode1==='dark'?'white':'black'}}>
                          <strong>vTextLator: </strong>is a utility to modify your text. Currently it can change any text to UPPERCASE
                          ,to lowercase or copy text.<br></br>Dark Mode feature is also added.
                        </div>
                        </div>
                        </div>
                        </div>
                  </div>
      
  )
}
