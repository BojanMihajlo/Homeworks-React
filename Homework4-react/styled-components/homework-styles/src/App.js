
import './App.css';
import Firstcomponent from './container1/Firstcomponent';
import Secondcomponent from './container1/Secondcomponent';
import Fourthcomponent from './container2/Fourthcomponent';
import Thirdcomponent from './container2/Thirdcomponent';


function App() {
  return (
    <div className='App'>

      <h1>Art Cards</h1>
      <div className='styled-components'>
    <Firstcomponent/>
    <div className='second-com'>
      <h2>Documentation</h2>
      <p>Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, 
        styled-components allows you to write actual CSS code to style your components.
         It also removes the mapping between components and styles – using components as a low-level styling
          construct could not be easier!</p> <br/>
        <p>Every Art Cards have a little explanation for four type of style components in React.</p> <br/>
        <p>Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, 
        styled-components allows you to write actual CSS code to style your components.
         It also removes the mapping between components and styles – using components as a low-level styling
          construct could not be easier!</p> 

    </div>
    </div>
    <div className='styled-components'>
    <Secondcomponent/>
    <Thirdcomponent/>
    <Fourthcomponent/>
    </div>
    </div>
  );
}

export default App;
