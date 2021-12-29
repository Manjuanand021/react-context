import React, { useContext, useState } from 'react';

const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('french');

    const updateLanguage = ({ target: { value } }) => {
        debugger;
        setLanguage(value);
    };

    return (
        <LanguageContext.Provider
            value={{
                language: language,
                updateLanguage: updateLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const languageContext = useContext(LanguageContext);
    if (!languageContext) {
        throw new Error(
            'useLanguageContext must be used within a LanguageContext provider',
        );
    }
    return languageContext;
};
