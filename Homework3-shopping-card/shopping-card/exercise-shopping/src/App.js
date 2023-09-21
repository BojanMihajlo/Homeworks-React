import './App.css';
import RegisteredItemsContainer from './components/RegisteredItemsContainer';
import InputItemComponent from './components/InputItemComponent';
import {useState} from 'react';


function App() {
  const initialItems = [
    {
      id: 1,
      name: "Pickles",
      description: "Like cucumbers, but smaller.",
      price: 10,
    },
    {
      id: 2,
      name: "Apples",
      description: "They grow on trees.",
      price: 13,
    },
    {
      id: 3,
      name: "Chips",
      description: "Fun version of potatoes.",
      price: 15,
    },
    {
      id: 4,
      name: "Sunflower seeds",
      description: "Because you can't eat the flower.",
      price: 5,
    },
    {
      id: 5,
      name: "Pizza",
      description: "For every situation.",
      price: 20,
    },
  ];

  const [itemList, setItemList] = useState(initialItems);
  const [deletedItems, setDeletedItems]= useState([]);
  const [callSort, setCallSort] = useState(false);


  const addItemHandler = (submittedData) => {
    setItemList((currentState) => {
      const newId = currentState.length + 1;
      const newItem = {
        ...submittedData,
        id: newId
      };

      return [...currentState, newItem];
    });
  };
  
  const deleteItemHandler = (item) => {
    setItemList((presentItems) => {
      return presentItems.filter((presentItem) => {
          return presentItem.id !== item.id;
      })
  });

   setDeletedItems((alreadyDeletedItems) => {
      return [...alreadyDeletedItems, item];
   });
  }

   
  const deleteAllElementHandler = () => {
    setDeletedItems([]);
  };

const sortItemHandler = () => {
    setItemList((currentItemList) => {
        const sorted = currentItemList.sort((itemA, itemB) => {
            if (itemA.price > itemB.price) {
                return 1;
            } else {
                return -1;
            }
        });
        console.log(sorted);
        return sorted;
    });

    setCallSort(!callSort);
};

  
  
  
  
 

  return (
    <div className="app-container">
       <RegisteredItemsContainer items={itemList} onDeleteHandler={deleteItemHandler} onSortClickHandler={sortItemHandler}/>                              
       <InputItemComponent onSubmitHandler={addItemHandler}/>
       <RegisteredItemsContainer items={deletedItems}  onDeleteAllElementHandler={deleteAllElementHandler} />
                                      
    </div>
  );
}

export default App;