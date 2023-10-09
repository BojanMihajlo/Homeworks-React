  import styles from 'styled-components'

  const DivCards = styles.div`
    &:hover {
      cursor:pointer;
    }
  
  `
  const GoalsCard = (props) => {   


    const { goal } = props;
     
    const deleteHandlerGoals = () => {
        if(props.deleteOnClickGoals){
          props.deleteOnClickGoals(goal.id)
        }
      }
    return (
      <DivCards>
        <h3 onClick={() => deleteHandlerGoals(goal.id)}>{goal.goal}</h3>
       
      </DivCards>
    );
  };
  
  export default GoalsCard;