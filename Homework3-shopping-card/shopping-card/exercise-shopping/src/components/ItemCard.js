import './ItemCard.css';
 
const ItemCard = (props) => {
  const { item, onDeleteHandler } = props;

  const deleteClickHandler = () => {
    console.log(onDeleteHandler);
    onDeleteHandler(item);
  };

  return (
    <div className='registered-item-container'>
      <div className='registered-item'>
        <div className='registered-item-description'>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <div className='registered-item-price'>
          <h1>{item.price}</h1>
        </div>
        {onDeleteHandler && <button className='btn-del' onClick={deleteClickHandler}>Delete item</button>}
      </div>
    </div>
  );
};
export default ItemCard