import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import i18n from '../i18n';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  type LanguageOption,
} from '../i18n/config';

type LanguageContextValue = {
  language: string;
  setLanguage: (code: string) => void;
  supportedLanguages: LanguageOption[];
};

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<string>(getInitialLanguage);

  const setLanguage = useCallback((code: string) => {
    const existing = SUPPORTED_LANGUAGES.find(
      (languageOption) => languageOption.code === code
    );
    const nextLanguage = existing ? existing.code : DEFAULT_LANGUAGE;
    setLanguageState(nextLanguage);

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
      } catch {
        // ignore storage errors
      }
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
