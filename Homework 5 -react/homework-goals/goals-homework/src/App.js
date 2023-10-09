
import './App.css';
import Goals from './components/Goals';
import GoalsContainer from './components/GoalsContainer';
import GoalsCard from './components/GoalsCard';
import {useState} from 'react';

function App() {
  
 
  const [goals, setGoals] = useState ([]);
  const [goalsToDelete, setGoalsToDelete] = useState([]);
  const [message, setMessage] = useState ('No added goals')

  const addGoals = (goal) => {
    setGoals((currentGoals) => {
      
      return [...currentGoals, goal];
      
    });
   
    setGoalsToDelete((currentGoals) => {
      return [...currentGoals, goal];
    });
    
  }
  const deleteGoals =() => {
    setGoalsToDelete([])
  }

  const deleteOnClick = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    })
  
  }
  const addMessage = () => {
    setMessage('')
  }

  return (
    <div className="App">
      <Goals  addGoalsCo ={addGoals} addMessageHandler ={addMessage}/>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
      <GoalsContainer goalls = {goals}>
      {goals.map((goal) => {
            return  <GoalsCard goal={goal} key={goal.id} deleteOnClickGoals={() =>deleteOnClick(goal.id)} />;
            
          })}
           <h5>{message}</h5>
      </GoalsContainer>

      <GoalsContainer deleteGoalsHandler= {deleteGoals}>
      {goalsToDelete.map((goal) => {
            return  <GoalsCard goal={goal} key={goal.id} />;
          })}
         <h5>{message}</h5>
      </GoalsContainer>
      </div>

    </div>
  );
}

export default App;
