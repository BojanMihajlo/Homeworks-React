import './RegisteredItemsContainer.css';
import ItemCard from './ItemCard';

const RegisteredItemsContainer = (props) => {
  const {items, onDeleteHandler, onDeleteAllElementHandler, onSortClickHandler} = props;
 
  const backStyle= {backgroundColor:'agua'}
  return (
    <div className='container'>
    <div className='item-container'>
        {items.map((item) => {
            return <ItemCard item={item} onDeleteHandler={onDeleteHandler}/>;
        })}
    </div>
    {
        onDeleteAllElementHandler &&
        <button onClick={onDeleteAllElementHandler}>Delete elements</button> 
    }
    {
        onSortClickHandler && <button onClick={onSortClickHandler}>Sort list</button> 
    }
</div>
);

};

export default RegisteredItemsContainer;