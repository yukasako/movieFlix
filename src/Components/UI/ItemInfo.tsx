type ItemInfoProps = {
  title: string;
  detailText: string;
};

const ItemInfo = ({ title, detailText }: ItemInfoProps) => {
  return (
    <div className='card-body'>
      <h5>{title}</h5>
      <small className='text-muted'>{detailText}</small>
    </div>
  );
};
export default ItemInfo;
