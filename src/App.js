import './App.css';
import PostContainer from './components/JS/PostContainer';

function App() {

  let posts = [
    {
      prompt: "Create a variable and assign it a value.",
      imagePath: "variables1.png"
    },
    {
      prompt: "Show how to use string interpolation and concatenation.",
      imagePath: "interpolation1.png"
    }
  ]

  return (
    <div className="App">
      <h1>Dev Study</h1>
      <PostContainer posts={posts}/>
    </div>
  );
}

export default App;
