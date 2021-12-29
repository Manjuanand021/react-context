import { useLanguageContext } from '../../contexts';

export const TranslatableText = (props) => {
    const { language } = useLanguageContext();
    return props.dictionary[language];
};
