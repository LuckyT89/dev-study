import './App.css';
import PostContainer from './components/JS/PostContainer';

function App() {

  let posts = [
    {
      id: 1,
      prompt: "Create a class and make an instance of that class.",
      imagePath: "ruby1.png"
    },
    {
      id: 2,
      prompt: "This is the second post",
      imagePath: "path to second image"
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
