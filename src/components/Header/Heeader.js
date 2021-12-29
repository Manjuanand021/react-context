import { useLanguageContext } from '../../contexts';

export const Header = () => {
    const { updateLanguage } = useLanguageContext();

    return (
        <header>
            see this site in
            <select onChange={updateLanguage}>
                <option value="french">french</option>
                <option value="english">english</option>
                <option value="italian">italian</option>
            </select>
        </header>
    );
};
