type FavoriteButtonProps = {
  isActive: boolean;
  disabled?: boolean;
  onToggle: () => void;
};

const FavoriteButton = ({
  isActive,
  disabled = false,
  onToggle,
}: FavoriteButtonProps) => {
  return (
    <button
      type='button'
      className={`favorite-heart ${isActive ? 'favorite-heart--active' : ''}`}
      onClick={onToggle}
      disabled={disabled}
      aria-pressed={isActive}
    >
      <i
        className={`${isActive ? 'fas' : 'far'} fa-heart`}
        aria-hidden='true'
      ></i>
    </button>
  );
};

export default FavoriteButton;
