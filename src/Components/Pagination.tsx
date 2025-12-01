type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

export const Pagination = ({ page, totalPages, onPrev, onNext }: Props) => {
  return (
    <div className='pagination'>
      <button onClick={onPrev} disabled={page === 1}>
        &laquo; Prev
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button onClick={onNext} disabled={page === totalPages}>
        Next &raquo;
      </button>
    </div>
  );
};
