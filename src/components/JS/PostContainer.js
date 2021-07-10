import '../CSS/PostContainer.css';
import Post from './Post';

function PostContainer({ posts }) {
    
    const postCards = posts.map((post) => <Post key={post.imagePath} prompt={post.prompt} imagePath={post.imagePath} />)

    return (
        <div className='post-container'>
            {postCards}
        </div>
    );
}

export default PostContainer;