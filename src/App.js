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
    {
      prompt: "Show how to use the bang operator (!) to determine if something is truthy or falsey.",
      imagePath: "10truthy1.png"
    },
    {
      prompt: "Show how to use the And and Or boolean operators.",
      imagePath: "11boolean1.png"
    },
    {
      prompt: "Show how to use the comparison operators.",
      imagePath: "12boolean1.png"
    },
    {
      prompt: "Write an if statement.",
      imagePath: "13conditional1.png"
    },
    {
      prompt: "Write a case statement.",
      imagePath: "14conditional2.png"
    },
    {
      prompt: "Write a loop that runs 10 times. Show how you can also do this without a counter using the times method.",
      imagePath: "15looping1.png"
    },
    {
      prompt: "Write both a while loop and an until loop that runs 10 times.",
      imagePath: "16looping2.png"
    },
    {
      prompt: "Create an array of items. Show how to add new items both at the end of the array and at the beginning of the array.",
      imagePath: "17arrays1.png"
    },
    {
      prompt: "Create an array of items. Show how to remove items from both the end and the beginning of the array.",
      imagePath: "18arrays2.png"
    },
    {
      prompt: "Create an array of items. Show how to access some of the different items in the array and how to look up the index of a specific item.",
      imagePath: "19arrays3.png"
    },
    {
      prompt: "Create an array of numbers. Show how to use methods to sort the array, reverse the array, show if a specific number is included in the array, and show the size of the array.",
      imagePath: "20arrays4.png"
    },
    {
      prompt: "Show how to use the each method and the map/collect method to iterate through an array.",
      imagePath: "21iteration1.png"
    },
    {
      prompt: "Show how to use the all, none, any, and include boolean methods on an array.",
      imagePath: "22iteration2.png"
    },
    {
      prompt: "Show how to use the select, detect/find, and reject methods on an array.",
      imagePath: "23iteration3.png"
    },
    {
      prompt: "Show how to sort an array.",
      imagePath: "24iteration4.png"
    },
    {
      prompt: "Create a hash using string keys, symbol keys, and using JSON style. Retrieve a value from each one.",
      imagePath: "25hashes1.png"
    },
    {
      prompt: "Create a hash and check if a specific key exists. Print one message if it does and another if it does not.",
      imagePath: "26hashes2.png"
    },
    {
      prompt: "Create a hash. Then update the value of one of the keys and also create a new key with a value.",
      imagePath: "27hashes3.png"
    },
    {
      prompt: "Show that you can create and manipulate nested data structures.",
      imagePath: "28hashes4.png"
    }
  ]

  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path='/'>
          <RefPostContainer posts={posts}/>
        </Route>

        <Route exact path='/study'>
          <StudyPostContainer posts={posts} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
