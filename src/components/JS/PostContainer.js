import '../CSS/PostContainer.css';
import Post from './Post';

function PostContainer({ posts }) {

    console.log(posts);

    const postCards = posts.map((post) => <Post key={post.id} prompt={post.prompt} imagePath={post.imagePath} />)

    return (
        <div className='post-container'>
            This is the post container
            {postCards}
        </div>
    );
}

export default PostContainer;