import styles from 'styled-components';


const DivContainer = styles.div`
   background-color: #5FDAA8;
   padding:2%;
   border-radius:5px;
   border:1px solid black;
 
   & button{
    padding:10%;
    background-color:#5F8EDA;
    border:none;
    border-radius:5px;
   }

`
const GoalsContainer = (props) => {
    
 
    const deleteHandler = () => {
        props.deleteGoalsHandler()
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    return (
     <DivContainer >   
        {props.deleteGoalsHandler && (
        <button onClick={deleteHandler}>Delete list</button>
      )}
        
        {props.children}
     
     </DivContainer>
    )
}

export default GoalsContainer