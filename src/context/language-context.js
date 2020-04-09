import React, { useState } from 'react'

export const LanguageContext = React.createContext({chosenLanguage: 'minion'})

const LanguageProvider = props => {
    const [chosenLanguage, setChosenLanguage] = useState('minion')

    return (
        <LanguageContext.Provider value={{
            chosenLanguage: chosenLanguage, 
            setChosenLanguage: setChosenLanguage
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider