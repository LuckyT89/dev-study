import './App.css';
import PostContainer from './components/JS/PostContainer';

function App() {

  let posts = [
    {
      id: 1,
      prompt: "This is the first post!!!!!",
      imagePath: "path to first image"
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
