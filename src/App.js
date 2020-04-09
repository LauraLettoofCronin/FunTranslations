import React from 'react'
import Loader from './components/Loader/Loader'
import Title from './components/Title/Title'
import InputOutput from './components/InputOutput/InputOutput'
import Instructions from './components/Instructions/Instructions'
import LanguageSelect from './components/LanguageSelect/LanguageSelect'
import './App.css'
import './MediaQueries.css'

const app = ()  => {
  return (
    <div className='app'>
      <Loader />
      <Title />
      <LanguageSelect />
      <Instructions />
      <InputOutput />
    </div>
  )
}

export default app
