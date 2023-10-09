import {useState} from 'react'
import styled from 'styled-components';

const Form = styled.form`
  
   display:flex;
   flex-direction: row;
   align-items: center;
   margin:2% 0 8% 38%;
   padding:2%;
   background-color:aqua;
   width:20%;
   border-radius:5px;
   border:1px solid black;

   & input {
    border: ${props => (props.valid ? '2px solid black' : '2px solid red')};
    height:4%;
    margin-left:4%;
   }
   & label {
    padding-left: 1%;
    font-weight:bold;
    font-size:25px;
    
  }

  & button {
    background-color: blue;
    color:white;
    padding:4%;
    margin:3%;
    border:none;
    border-radius:5px;

  }
`

const Goals = (props) => {

    const [goalsInput, setGoalsInput] = useState ('');
    const {addMessageHandler} = props;
   
    const onChangeGoalsHandler =(event) => {
         setGoalsInput(event.target.value)
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
    
        const newGoals = {
          id: Math.random(),
          goal: goalsInput,
         
        };
        props.addGoalsCo(newGoals)
        setGoalsInput('')
        console.log(newGoals.id)
    }

    return (
      <Form onSubmit={onSubmitFormHandler}>
      <div>
        <label>Goals:</label>
        <input type="text" onChange={onChangeGoalsHandler} value={goalsInput} /> <br/>
        <button type="submit" onClick={addMessageHandler}>Add goals</button>
      </div>
    </Form>
    )
}

export default Goals