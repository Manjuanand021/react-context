import React from 'react';

import { LanguageProvider } from './contexts';

import { TranslatableText, Header } from './components';

import './App.css';

const WelcomeMessageByLanguage = {
    french: 'Bonjour, R10!',
    english: 'Hello, R10!',
    italian: 'Ciao, R10!',
};

function App() {
    return (
        <LanguageProvider>
            <div>
                <Header />
                <h1>
                    <TranslatableText dictionary={WelcomeMessageByLanguage} />
                </h1>
            </div>
        </LanguageProvider>
    );
}

export default App;
