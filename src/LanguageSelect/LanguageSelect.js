import React from 'react'
import './LanguageSelect.css'

const languageSelect = (props) => {
  return (
    <div className='language-select-wrapper'>
      <div className='base-language'>English</div>
      <div className='block-arrow'>
        <div className='square'/>
        <div className="triangle-right" />
      </div>
      
        <select className='chosen-language' id='chosen-language'
          onChange={props.onLanguageSelect}>
          <option value='minion'>Minion</option>
          <option value='yoda'>Yoda</option>
          <option value='pirate'>Pirate</option>
          <option value='dothraki'>Dothraki</option>
          <option value='valyrian'>Valyrian</option>
          <option value='shakespeare'>Shakespeare</option>
          <option value='groot'>Groot</option>
          <option value='ermahgerd'>Ermahgerd</option>
        </select>
    </div>
  )
}

export default languageSelect