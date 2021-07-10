import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/JS/Nav';
import RefPostContainer from './components/JS/RefPostContainer';
import StudyPostContainer from './components/JS/StudyPostContainer';

function App() {

  let posts = [
    {
      prompt: "Create a variable and assign it a value.",
      imagePath: "1variables1.png"
    },
    {
      prompt: "Show how to use string interpolation and concatenation.",
      imagePath: "2interpolation1.png"
    },
    {
      prompt: "Create a method and then invoke it.",
      imagePath: "3methods1.png"
    },
    {
      prompt: "Create a method that takes parameters and then invoke it.",
      imagePath: "4methods2.png"
    },
    {
      prompt: "Create a method with default arguments and then invoke it once while supplying arguments and once without supplying any arguments.",
      imagePath: "5methods3.png"
    },
    {
      prompt: "Show how to print multiple items both on the same line and then printed out on separate lines.",
      imagePath: "6printing1.png"
    },
    {
      prompt: "Show what a method will return by default and what it will return when the 'return' keyword is used.",
      imagePath: "7return1.png"
    },
    {
      prompt: "Show how to use the pry gem for debugging.",
      imagePath: "8pry1.png"
    },
    {
      prompt: "Create a method and declare some variables both inside and outside the method. Show how scope determines which variables can be accessed from different locations in the program.",
      imagePath: "9scope1.png"
    },
  ]

  return (
    <div className="App">
      <h1>Dev Study</h1>
      <Nav />

      <Switch>
        <Route exact path='/'>
          <RefPostContainer posts={posts}/>
        </Route>

        <Route exact path='/study'>
          <h2>Study Mode!!!</h2>
          <StudyPostContainer />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
