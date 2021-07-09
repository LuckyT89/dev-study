import '../CSS/PostContainer.css';
import Post from './Post';

function PostContainer({ posts }) {

    console.log(posts);

    // const posts = posts.map((post) => <Post />)

    return (
        <div className='post-container'>
            This is the post container
            <Post prompt="first prompt" imagePath="first path" />
            <Post prompt="second prompt" imagePath="second path" />
        </div>
    );
}

export default PostContainer;