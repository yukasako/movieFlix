import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type LanguageOption = {
  code: string;
  label: string;
};

type LanguageContextValue = {
  language: string;
  setLanguage: (code: string) => void;
  supportedLanguages: LanguageOption[];
};

const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en-US', label: 'EN' },
  { code: 'ja-JP', label: 'JP' },
];

const STORAGE_KEY = 'movieflix:language';
const DEFAULT_LANGUAGE =
  import.meta.env.VITE_LANGUAGE ?? SUPPORTED_LANGUAGES[0].code;

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LANGUAGE;
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
        window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      } catch {
        // ignore storage errors
      }
    }
  }, []);

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
