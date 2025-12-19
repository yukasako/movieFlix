import { useTranslation } from 'react-i18next';

type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

export const Pagination = ({ page, totalPages, onPrev, onNext }: Props) => {
  const { t } = useTranslation();

  return (
    <div className='pagination'>
      <button onClick={onPrev} disabled={page === 1}>
        {t('common.paginationPrev')}
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button onClick={onNext} disabled={page === totalPages}>
        {t('common.paginationNext')}
      </button>
    </div>
  );
};
