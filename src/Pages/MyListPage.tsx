import { useTranslation } from 'react-i18next';

export const MyListPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('favorites.title')}</h1>
    </>
  );
};
