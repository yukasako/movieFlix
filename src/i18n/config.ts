export type LanguageOption = {
  code: string;
  label: string;
};

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en-US', label: 'EN' },
  { code: 'ja-JP', label: 'JP' },
];

export const LANGUAGE_STORAGE_KEY = 'movieflix:language';

export const DEFAULT_LANGUAGE = 'en-US';
