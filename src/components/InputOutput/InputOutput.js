import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../context/language-context'
import { LoadingContext } from '../../context/loading-context'
import { get } from '../../functions/apiCalls'
import './InputOutput.css'

const InputOutput = () => {
  const language = useContext(LanguageContext)
  const loading = useContext(LoadingContext)

  const [error, setError] = useState(false)
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  
  let disabled = loading.loading || inputText.trim() === ''

  const onChangeInputText = () => setInputText(document.getElementById('input').value)

  const onTranslateClick = async () => {
    if(inputText.trim() !== '') {
      loading.setLoading(true)
      const results = await get(`${language.chosenLanguage}.json/?text=${inputText}`)
      if(results.error) setError(true)
      else setOutputText(results.contents.translated)
      loading.setLoading(false)
    }
  }

  return (
    <div className='input-output-wrapper'>
      <textarea 
        className='text-field' 
        id='input'
        placeholder='Text to translate' 
        autoFocus 
        value={inputText}
        onChange={onChangeInputText}
      />
      <button disabled={disabled} className='translate-button' onClick={onTranslateClick} >
        Translate
      </button> 
      <textarea 
        className={!error ? 'text-field' : 'text-field error'}
        id='output' 
        value={!error ? outputText : 'Oops! Try again later. Only 5 translations per hour are allowed.'}
        readOnly 
        placeholder='Translated text' 
      />
    </div>
  )
}

export default InputOutput