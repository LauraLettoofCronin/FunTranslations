import React, { Component } from 'react'
import './App.css'
import './MediaQueries.css'
import BounceLoader from 'react-spinners/BounceLoader'
import ApiCalls from './ApiCalls/ApiCalls'
import Title from './Title/Title'
import InputOutput from './InputOutput/InputOutput'
import Instructions from './Instructions/Instructions'
import LanguageSelect from './LanguageSelect/LanguageSelect'

class App extends Component{
  state={
    loading: false,
    error: false,
    chosenLanguage: 'minion',
    inputText: '',
    outputText: '',
  }

  componentDidMount() {
    this.apiCalls = new ApiCalls()
  }

  onLanguageSelect = () => {
    this.setState({chosenLanguage: document.getElementById('chosen-language').value})
  }

  onChangeInputText = () => {
    this.setState({inputText: document.getElementById('input').value})
  }

  onTranslateClick = () => {
    if(this.state.inputText.trim() !== '') {
      this.setState({loading:true})
      this.apiCalls.translateText(this.state.chosenLanguage, this.state.inputText).then(data => {
        if(data === 'Error') {
          this.setState({error:true, loading:false})
        } else {
          this.setState({loading:false, outputText: data.contents.translated})
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className='loading'>
          <BounceLoader
            color={'#226b80'}
            loading={this.state.loading}
          />
        </div>
        <Title />
        <LanguageSelect onLanguageSelect={this.onLanguageSelect} />
        <Instructions />
        <InputOutput 
          loading={this.state.loading}
          error={this.state.error}
          onChangeInputText={this.onChangeInputText} 
          onTranslateClick={this.onTranslateClick}
          inputText={this.state.inputText}
          outputText={this.state.outputText} 
        />
      </div>
    )
  }
  
}

export default App;
