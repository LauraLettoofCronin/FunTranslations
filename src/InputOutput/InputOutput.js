import React from 'react'
import './InputOutput.css'

const inputOutput = (props) => {
  let disabled = props.loading || props.inputText.trim() === ''

  return (
    <div className='input-output-wrapper'>
      <textarea 
        className='text-field' 
        id='input'
        placeholder='Text to translate' 
        autoFocus 
        value={props.inputText}
        onChange={props.onChangeInputText}
      />
      <button disabled={disabled} className='translate-button' onClick={props.onTranslateClick} >
        Translate
      </button> 
      <textarea 
        className={!props.error ? 'text-field' : 'text-field error'}
        id='output' 
        value={!props.error ? props.outputText : 'Oops! Try again later. Only 5 translations per hour are allowed.'}
        readOnly 
        placeholder='Translated text' 
      />
    </div>
  )
}

export default inputOutput